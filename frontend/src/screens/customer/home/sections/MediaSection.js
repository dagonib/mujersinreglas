import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import Image1 from '../../../../assets/logos/diario16.png';
import Image2 from '../../../../assets/logos/directa.png';
import Image3 from '../../../../assets/logos/mys.png';
import Image4 from '../../../../assets/logos/welive.png';

const MediaSection = () => {
  return (
    <section className="media section">
      <Container fluid="lg">
        <Row className="media__row">
          <h1 className="title-md-section">Mi presencia en los medios</h1>
          <Col className="media__logos">
            <Nav.Link
              href="https://diario16.com/author/carolina-ackermann/"
              target="_blank"
            >
              <img
                src={Image1}
                alt="Imagen la menopausia es evolución"
                className="image"
              />
            </Nav.Link>
            <Nav.Link
              href="https://directa.cat/visibilitzar-el-climateri/"
              target="_blank"
            >
              <img
                src={Image2}
                alt="Imagen la menopausia es evolución"
                className="image"
              />
            </Nav.Link>
            <Nav.Link
              href="https://matriz.net/numero-50/atencion-sanitaria-en-menopausia-climaterio-recogida-de-informacion-testimonios-el-estado-espanol/"
              target="_blank"
            >
              <img
                src={Image3}
                alt="Imagen la menopausia es evolución"
                className="image"
              />
            </Nav.Link>
            <Nav.Link
              href="https://www.welife.es/cuerpo/vida-saludable/la-baja-por-dolor-de-regla-no-resuelve-la-pobreza-menstrual/?utm_campaign=Salud%2C+en+esencia&utm_medium=email&utm_source=Revue+newsletter"
              target="_blank"
            >
              <img
                src={Image4}
                alt="Imagen la menopausia es evolución"
                className="image"
              />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MediaSection;
