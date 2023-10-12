import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { listEvents } from '../../../../actions/eventActions';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

// Components
import { Event } from '../../../../components/Event';
import Row from 'react-bootstrap/Row';

const EventsSection = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  // Global State --> eventList
  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="events">
      <Container fluid="lg">
        <Row className="title">
          <h5 className="title-sm-section mb-2">Próximo evento</h5>
        </Row>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {events.map((event) => (
            <Carousel.Item key={event._id}>
              <Event {...event} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default EventsSection;
