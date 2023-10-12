import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { addDecimals } from '../../../maths/Functions';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { deleteEvent, listEvents } from '../../../actions/eventActions';
import { EVENT_CREATE_RESET } from '../../../constants/eventConstants';

// Fecha Days
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/es';
dayjs.locale('es');

const Event = ({ event }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dayjs.extend(updateLocale);
  dayjs.updateLocale('es', {
    month: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    weekdays: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ],
  });

  // Global State --> userLogin
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Global State --> eventDelete
  const eventDelete = useSelector((state) => state.eventDelete);
  const { loading, error, success } = eventDelete;

  useEffect(() => {
    dispatch({ type: EVENT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      navigate('/account/login');
    }

    if (success) {
      window.location.reload();
    }
  }, [userInfo, dispatch, navigate, success]);

  const deleteHandler = (id) => {
    if (window.confirm('¿Desear borrar el evento seleccionado?')) {
      dispatch(deleteEvent(id));
    }
  };

  return (
    <Row className="admin-event">
      <Col className="admin-event__left">
        <div className="admin-event__left-typeinfo">
          <p className="admin-event__left-typeinfo-type">{event.type}</p>
          <p className="admin-event__left-typeinfo-name">{event.name}</p>
          <p className="admin-event__left-typeinfo-description">
            {event.description}
          </p>
        </div>
        <div className="admin-event__left-wheninfo">
          <div className="admin-event__left-wheninfo-datebox">
            {event.date === null ? (
              <p className="admin-event__left-wheninfo-datebox-nameday text-center">
                Fecha a determinar
              </p>
            ) : (
              <>
                <p className="admin-event__left-wheninfo-datebox-nameday">
                  {dayjs(event.date).format('dddd')}
                </p>
                <p className="admin-event__left-wheninfo-datebox-numday">
                  {dayjs(event.date).format('D')}
                </p>
                <p className="admin-event__left-wheninfo-datebox-month">
                  {dayjs(event.date).format('MMMM')}
                </p>
                <p className="admin-event__left-wheninfo-datebox-year">
                  {dayjs(event.date).format('YYYY')}
                </p>
              </>
            )}
          </div>

          {dayjs(event.timeStart).get('h') === 0 || event.timeStart === null ? (
            <div className="admin-event__left-wheninfo-timebox">
              <p className="text-center">Hora a determinar</p>
            </div>
          ) : (
            <div className="admin-event__left-wheninfo-timeboxgrid">
              <p className="time">{dayjs(event.timeStart).format('HH:mm')}h</p>
              <p className="timeTo">a</p>
              <p className="time">{dayjs(event.timeEnd).format('HH:mm')}h</p>
            </div>
          )}
        </div>
      </Col>
      <Col className="admin-event__right">
        <p className="admin-event__right-place">{event.place}</p>
        <p className="admin-event__right-address">{event.address}</p>
        <div className="admin-event__right-pricebox">
          <p className="admin-event__right-pricebox--pricetitle">Precio</p>
          {event.price === -1 ? (
            <p className="admin-event__right-pricebox--price">A determinar</p>
          ) : event.price === 0 ? (
            <p className="admin-event__right-pricebox--price">Gratuito</p>
          ) : (
            <p className="admin-event__right-pricebox--price-alt">
              {addDecimals(event.price)}€
            </p>
          )}
        </div>
        <p className="admin-event__right-organizer">
          Organiza: {event.organizer}
        </p>
        <p className="admin-event__right-inscription">
          Inscripción: {event.inscription}
        </p>
      </Col>
      <Col className="admin-event__actions">
        <LinkContainer to={`/admin/event/${event._id}/edit`}>
          <Button>
            <i className="bi bi-pencil-square"></i>
          </Button>
        </LinkContainer>
        <Button variant="danger" onClick={() => deleteHandler(event._id)}>
          <i className="bi bi-trash-fill"></i>
        </Button>
      </Col>
    </Row>
  );
};

export default Event;
