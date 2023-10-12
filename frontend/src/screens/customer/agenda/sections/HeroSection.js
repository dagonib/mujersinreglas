import React from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Agenda from '../../../../assets/images/agenda/MSR_SF.png';

const HeroSection = () => {
  return (
    <section className="hero-agenda" id="hero">
      <Container fluid="lg">
        <Row className="content">
          <Col className="header">
            <h1 className="header__name">Mujer Sin Reglas</h1>
            <h1 className="header__title">AGENDA 2024</h1>
            <h1 className="header__subtitle">
              Diario íntimo de tu metAMORfosis hacia la madurez
            </h1>
          </Col>
          <Col className="data">
            <p className="data__description">
              Diseñada exclusivamente para brindarte{' '}
              <span className="emphasized">
                conocimientos, apoyo y recursos
              </span>
              &nbsp; mientras navegas esta nueva etapa de la vida.
            </p>
            <p className="data__call">
              Con el soporte de la Asociación de Cultura Menstrual, La vida en
              rojo
            </p>
          </Col>
          <Col className="imagebox">
            <img
              alt="Ilustración correspondiente a la portada de la edición de la agenda Mujer Sin Reglas 2024"
              src={Agenda}
              className="image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
