import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from '../../../../assets/images/engage/engage-second.png';

const EngageSecondSection = () => {
  return (
    <section className="engagesecond">
      <Container fluid="lg">
        <Row className="engagesecond__row">
          <Col className="engagesecond__header">
            <h1 className="title-md-section">
              met<span className="title-md-cursive-section">amor</span>fosis
            </h1>
          </Col>
          <Col className="engagesecond__text">
            <p className="phrase">
              Es fascinante atender al cuerpo y a sus cambios. Porque sí,
              madurar es vivir amando lo que eres, lo que fuiste y lo que serás.
              Porque no hay otra manera de ser humana.
            </p>
            <p className="phrase">
              Porque tienes el regalo de la larga vida que no tuvieron las
              mujeres del siglo pasado e incluso, que muchas de este siglo.
            </p>
            <p className="phrase">
              {' '}
              Este regalo requiere tu plena <span>consciencia y autoamor</span>.
            </p>
            <p className="phrase fw-bold mt-3">Carolina Ackermann</p>
          </Col>
          <Col className="engagesecond__imageBox">
            <img
              src={Image}
              alt="Ilustración de la agenda Mujer Sin Reglas 2024"
              className="image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EngageSecondSection;
