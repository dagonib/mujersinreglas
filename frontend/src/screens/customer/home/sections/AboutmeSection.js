import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from '../../../../assets/images/sobreMi/sobre-mi-lg.png';

const AboutmeSection = () => {
  return (
    <section className="aboutme">
      <Container fluid="lg">
        <Row className="aboutme__head">
          <h1 className="self-present">Me presento</h1>
          <p className="title-md-section">Carolina Ackermann Barreiro</p>
        </Row>
        <Row className="aboutme__row">
          <Col className="aboutme__left">
            <p className="text">
              Mi recorrido comenzó en el año 2015 con el proyecto
              <span className="fst-italic">
                {' '}
                Espacio Matriz, terapia y educación menstrual
              </span>
              .
            </p>
            <p className="text">
              Querer estar en red con otras mujeres me llevó a fundar la
              Asociación de Cultura Menstrual
              <span className="fst-italic"> La vida en rojo</span> en el año
              2019.
            </p>
            <p className="text">
              Desde el año 2021, a las puertas de una nueva etapa vital, ahora
              ya, en menopausia, inicié el proyecto actual de
              <span className="fst-italic">
                {' '}
                Mujer Sin Reglas bienestar consciente en la menopausia y el
                climaterio
              </span>
              .
            </p>
          </Col>
          <Col className="aboutme__right">
            <img alt="Imagen de Carolina Ackermann" src={Image} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutmeSection;
