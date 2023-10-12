import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { createEvent, listEvents } from '../../../actions/eventActions';
import { useNavigate } from 'react-router-dom';

// Bootstrap Components
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

// Components
import Icon from '../../../components/Icon';
import { EVENT_CREATE_RESET } from '../../../constants/eventConstants';
import Event from '../components/Event';

const EventListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sortEvents, setSortEvents] = useState([]);

  // Global State --> userLogin
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Global State --> eventList
  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;

  // Global State --> eventCreate
  const eventCreate = useSelector((state) => state.eventCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    event: createdEvent,
  } = eventCreate;

  useEffect(() => {
    dispatch({ type: EVENT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      navigate('/account/login');
    }

    if (successCreate) {
      navigate(`/admin/event/${createdEvent._id}/edit`);
    } else {
      dispatch(listEvents());
    }
  }, [dispatch, navigate, userInfo, successCreate, createdEvent]);

  // useEffect(() => {
  //   if (events) {
  //     const sortedData = [...events].sort((a, b) => {
  //       const data_a = a.
  //     })
  //   }
  // }, [events])

  const createEventHandler = () => {
    dispatch(createEvent());
  };

  return (
    <section className="admin-section">
      <Container className="p-0 m-0">
        <Row className="title">
          <Col>
            <h1>Eventos</h1>
          </Col>
        </Row>
        <Row className="mt-2 p-3">
          <Col className="d-flex justify-content-end">
            <Button onClick={createEventHandler} className="btn-create">
              <Icon icon="bi bi-plus-circle-fill" /> Crear Evento
            </Button>
          </Col>
        </Row>

        {/* List Product Management */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Row className="event-list">
            {events &&
              events.map((event) => <Event key={event._id} event={event} />)}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default EventListScreen;
