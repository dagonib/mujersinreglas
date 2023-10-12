import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import AgendaImg from '../../../../assets/images/agenda/mockup-agenda.png';
const AgendaSection = () => {
  return (
    <section className="agenda image">
      <Container fluid="lg">
        <Row></Row>
        <Row className="agenda__row image">
          <Col className="agenda__header">
            <h1 className="creation">Mi creación</h1>
            <h1 className="title-md-section">Agenda Anual</h1>
            <h1 className="cursive">Mujer Sin Reglas</h1>
          </Col>
          <Col className="agenda__image">
            <img
              src={AgendaImg}
              alt="Imagen la menopausia es evolución"
              className="image back-alt"
            />
          </Col>
          <Col className="agenda__info">
            <p className="paragraph ">
              Con tu compra apoyas a la Asociación de cultura menstrual
              <br />
              <span className="fst-italic">La vida en rojo</span>
            </p>
            <Nav.Link href="/agenda" className="main-btn">
              Quiero ver
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AgendaSection;
