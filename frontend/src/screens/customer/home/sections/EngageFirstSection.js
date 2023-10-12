import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import engage from '../../../../assets/images/home/engage-first.png';

const EngageFirstSection = () => {
  return (
    <section className="engagefirst">
      <Container fluid="lg">
        <Row className="engagefirst__row">
          <Col className="engagefirst__left">
            <p className="message">Sin reglas</p>
            <p className="message">Sin tabúes</p>
            <p className="message">Sin miedos</p>
          </Col>
          <Col className="engagefirst__right image">
            <img
              alt="Imagen del Aquellarre Mujeres Sin Reglas en Can Balasch, Rubi 2023"
              src={engage}
            />
            <p>Aquelarre Mujeres Sin Reglas, Can Balasch, Rubí 2023</p>
          </Col>
          <Col className="engagefirst__title">
            <h1 className="title-section">MENOPAUSIA ES EVOLUCIÓN</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EngageFirstSection;
