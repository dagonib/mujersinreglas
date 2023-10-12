import React from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeroSection = () => {
  return (
    <section className="hero-home image" id="hero">
      <Container fluid="lg">
        <Row className="content">
          <Col className="rrss">
            <a
              href="https://www.instagram.com/mujersinreglas/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/mujersinreglas/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              className="d-none"
              href="https://www.facebook.com/mujersinreglas/"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </Col>
          <Col className="space"></Col>
          <Col className="data">
            <h1 className="data__title">
              Carolina Ackermann
              <br />
              Divulgadora experta en menopausia y climaterio
              <br />
              <span className="data__title--italic">
                Bienvenida mujer sin reglas
              </span>
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
