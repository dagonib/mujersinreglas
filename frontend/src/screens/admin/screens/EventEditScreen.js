import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Fecha
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';

// ACTIONS
import { getEventDetails, updateEvent } from '../../../actions/eventActions';

// BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EVENT_UPDATE_RESET } from '../../../constants/eventConstants';

// Days
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import Col from 'react-bootstrap/esm/Col';
dayjs.locale('es');

const types = ['Charla', 'Jornada', 'Taller', 'Cápsula'];

const EventEditScreen = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Constants Form
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(dayjs());
  const [timeStart, setTimeStart] = useState(dayjs());
  const [timeEnd, setTimeEnd] = useState(dayjs());
  const [place, setPlace] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [inscription, setInscription] = useState('');
  const [link, setLink] = useState('Introduce el link del formulario');

  // Global State --> eventDetails
  const eventDetails = useSelector((state) => state.eventDetails);
  const { loading, error, event } = eventDetails;

  const eventUpdate = useSelector((state) => state.eventUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = eventUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: EVENT_UPDATE_RESET });
      navigate('/admin/eventlist');
    } else {
      if (!event.name || event._id !== eventId) {
        dispatch(getEventDetails(eventId));
      } else {
        setType(event.type);
        setName(event.name);
        setDescription(event.description);
        setDate(event.date);
        setTimeStart(event.timeStart);
        setTimeEnd(event.timeEnd);
        setPlace(event.place);
        setAddress(event.address);
        setPrice(event.price);
        setOrganizer(event.organizer);
        setInscription(event.inscription);
        setLink(event.link);
      }
    }
  }, [dispatch, eventId, event, successUpdate]);

  const submitUpdateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateEvent({
        _id: eventId,
        type,
        name,
        description,
        date,
        timeStart,
        timeEnd,
        place,
        address,
        price,
        organizer,
        inscription,
        link,
      })
    );
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeStartChange = (newTime) => {
    setTimeStart(newTime);
  };

  const handleTimeEndChange = (newTime) => {
    setTimeEnd(newTime);
  };

  return (
    <section className="event-update admin-section">
      <Container className="p-0 m-0">
        <Row className="title">
          <Col>
            <h1>Crear / Actualizar evento</h1>
          </Col>
        </Row>
        <Row className="mt-2 p-3">
          <Col className="d-flex justify-content-start">
            <Link className="btn-create" to="/admin/eventlist">
              Cancelar
            </Link>
          </Col>
        </Row>
        <Row className="event-update-main_content px-3">
          {error && <p>{error}</p>}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Form onSubmit={submitUpdateHandler}>
              <Row className="event-update-main_content__date">
                {/* Date */}
                <Form.Group controlId="date" className="dateGroup">
                  <Form.Label>Fecha</Form.Label>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                  >
                    <DatePicker
                      value={dayjs(date)}
                      onChange={handleDateChange}
                      renderInput={(props) => <input {...props} />}
                    />
                  </LocalizationProvider>
                </Form.Group>

                {/* TimeStart */}
                <Form.Group controlId="timeStart" className="timeStart">
                  <Form.Label>Hora Inicio</Form.Label>

                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                  >
                    <TimePicker
                      value={dayjs(timeStart)}
                      onChange={handleTimeStartChange}
                      renderInput={(props) => <input {...props} />}
                    />
                  </LocalizationProvider>
                </Form.Group>

                {/* TimeEnd */}
                <Form.Group controlId="timeEnd" className="timeEnd">
                  <Form.Label>Hora Finalización</Form.Label>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                  >
                    <TimePicker
                      value={dayjs(timeEnd)}
                      onChange={handleTimeEndChange}
                      renderInput={(props) => <input {...props} />}
                    />
                  </LocalizationProvider>
                </Form.Group>
              </Row>
              <Row className="event-update-main_content__data">
                <Col className="left">
                  {/* Type */}
                  <Form.Group controlId="type" className="type">
                    <Form.Label>Tipo de Evento</Form.Label>
                    <Form.Select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Tipo de Evento</option>
                      {types.map((type) => {
                        return (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>

                  {/* Nombre */}
                  <Form.Group controlId="name" className="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Introduce el nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  {/* Descripction */}
                  <Form.Group controlId="description" className="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      type="name"
                      placeholder="Introduce la descripción"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="center">
                  {/* Place */}
                  <Form.Group controlId="place" className="place">
                    <Form.Label>Lugar</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Introduce el lugar"
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  {/* Dirección */}
                  <Form.Group controlId="address" className="address">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Introduce la dirección"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  {/* Organización */}
                  <Form.Group controlId="organizer" className="organizer">
                    <Form.Label>Organización</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Introduce la organización"
                      value={organizer}
                      onChange={(e) => setOrganizer(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="right">
                  {/* Inscripción */}
                  <Form.Group controlId="inscription" className="inscription">
                    <Form.Label>Inscripción (Texto Botón)</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Introduce si se ha de inscribir"
                      value={inscription}
                      onChange={(e) => setInscription(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  {/* Link */}
                  <Form.Group controlId="link" className="link">
                    <Form.Label>Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Introduce el link de incscripción"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  {/* Precio */}
                  <Form.Group controlId="price" className="price">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Introduce el precio"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              {/* Button */}
              <Button
                className="event-update-main_content__submitbtn"
                type="submit"
                variant="primary"
              >
                Actualizar
              </Button>
            </Form>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default EventEditScreen;
