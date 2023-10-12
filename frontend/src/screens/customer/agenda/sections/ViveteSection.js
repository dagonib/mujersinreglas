import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import BackImage from '../../../../assets/images/agenda/vivetes/MSR_SF.png';

const ViveteSection = () => {
  return (
    <section className="vivetes section">
      <Container fluid="lg">
        <Row className="mb-4 text-center">
          <h1 className="title title-md-section">Textos “Vívete”</h1>
          <p className="paragraph">
            Encontrarás 40 textos cuidadosamente escogidos para esta agenda
          </p>
        </Row>

        <Row className="types mt-3">
          <Col className="vivete">
            <p className="title">VÍVETE TIERRA</p>
            <img
              src={BackImage}
              alt="Imagen la menopausia es evolución"
              className="image back-alt"
            />
            <div className="elements">
              <p>Vitalidad</p>
              <p>Autocuidado</p>
              <p>Hábitos</p>
            </div>
          </Col>
          <Col className="vivete">
            <p className="title">VÍVETE MANANTIAL</p>
            <img
              src={BackImage}
              alt="Imagen la menopausia es evolución"
              className="image back-alt"
            />
            <div className="elements">
              <p>Cuerpo</p>
              <p>Transición</p>
              <p>Entender los cambios</p>
            </div>
          </Col>
          <Col className="vivete">
            <p className="title">VÍVETE FUEGO</p>
            <img
              src={BackImage}
              alt="Imagen la menopausia es evolución"
              className="image back-alt"
            />
            <div className="elements">
              <p>Placer</p>
              <p>Sexualidad</p>
              <p>Autoerotismo</p>
            </div>
          </Col>

          <Col className="vivete">
            <p className="title">VÍVETE TRUENO</p>
            <img
              src={BackImage}
              alt="Imagen la menopausia es evolución"
              className="image back-alt"
            />
            <div className="elements">
              <p>Autonomía</p>
              <p>Caminar consciente</p>
              <p>Límites</p>
            </div>
          </Col>

          <Col className="vivete">
            <p className="title">VÍVETE RAÍZ</p>
            <img
              src={BackImage}
              alt="Imagen la menopausia es evolución"
              className="image back-alt"
            />
            <div className="elements">
              <p>Sororidad</p>
              <p>Cambio de paradigma</p>
              <p>Comunidad</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ViveteSection;
