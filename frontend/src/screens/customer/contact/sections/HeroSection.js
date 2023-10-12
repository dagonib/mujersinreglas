import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const heroSection = () => {
  return (
    <section className="hero-contact">
      <Container fluid="lg">
        <Row className="contact-header">
          <h1 className="title">Contacta</h1>
          <p className="text">
            <span>
              Mujer Sin Reglas. Bienestar consciente en la menopausia y el
              climaterio
            </span>{' '}
            es una propuesta educativa y divulgativa para cambiar el actual
            paradigma de miedo, tabúes, inseguridad o tristeza que envuelven al
            poderoso proceso fisiológico de transición hacia la menopausia y la
            menopausia en sí misma.
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default heroSection;
