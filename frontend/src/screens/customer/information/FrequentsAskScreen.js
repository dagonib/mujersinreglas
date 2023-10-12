import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FrequentsAskScreen = () => {
  return (
    <section className="information">
      <Container fluid="lg">
        <Row className="information__header">
          <a href="/agenda" className="information__header--btn main-btn">
            Volver
          </a>
          <h1 className="information__header--title">Preguntas Frecuentes</h1>
        </Row>
        <Row className="information__content">
          <Col className="information__content--item">
            <h4 className="information__content--title">
              ¿Podré verla físicamente en algún sitio?
            </h4>
            <p className="information__content--text mb-1">
              La llevo conmigo a las diversas charlas y eventos que organizamos
              desde la Asociación La vida en rojo (Barcelona y alrededores).
            </p>
            <a href="/contact" className="information__content--btn main-btn">
              Suscríbete a mi newsletter
            </a>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">
              ¿Puedo adquirir la agenda en catalán?
            </h4>
            <p className="information__content--text mb-1">
              No. La agenda esta únicamente editada en idioma castellano.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">
              ¿La puedo comprar en PDF?
            </h4>
            <p className="information__content--text mb-1">
              No. La agenda MSR no se ha hecho en versión descargable.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">
              ¿Puedo organizar una presentación para mis amigas/compañeras de
              trabajo/espacio/asociación?
            </h4>
            <p className="information__content--text mb-1">
              Encantadas leeremos tu propuesta y te haremos llegar nuestras
              condiciones. ¡Sería maravilloso! La presentación se divide en dos
              partes: una primera de exposición muy amena sobre qué es el
              climaterio y la menopausia y la segunda, sobre la utilidad y usos
              de la agenda MSR. Envíanos un email con la propuesta a:
              agenda@mujersinreglas.info.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">
              Mi pregunta no está aquí. ¿Cómo puedo contactar?
            </h4>
            <p className="information__content--text mb-1">
              Envía un email: agenda@mujersinreglas.info. Te responderemos lo
              antes posible.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FrequentsAskScreen;
