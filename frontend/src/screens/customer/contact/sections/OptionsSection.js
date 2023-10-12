import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OptionsSection = () => {
  return (
    <section className="options">
      <Container fluid="lg">
        <Row className="list">
          <Col className="item">
            <h1>
              Si eres una mujer en la transición hacia la menopausia o en
              menopausia…
            </h1>
            <p>
              Eres única y tu vivencia en climaterio y menopausia, también. Por
              eso, la mejor manera de responder a tus inquietudes es hacerlo de
              manera individualizada. Juntas, encontraremos las respuestas para
              entenderte y actuar a tu favor.
            </p>
          </Col>
          <Col className="item">
            <h1>
              Si eres educadora menstrual, profesional sociosanitario/a,
              terapeuta, profesor/a…
            </h1>
            <p>
              Con los conocimientos y recursos que podré ofrecerte, te sentirás
              actualizado/a y preparado/a para acompañar a las mujeres en la
              perimenopausia y menopausia.
            </p>
          </Col>
          <Col className="item">
            <h1>Si eres una entidad, colectivo, proyecto sociocultural...</h1>
            <p>
              Soy fundadora de la Asociación de cultura menstrual "La Vida en
              Rojo". Tanto desde mi proyecto Mujer Sin Reglas, como desde la
              Asociación, estamos a entera disposición para coordinar
              actividades relacionadas con la salud, la perspectiva de género y
              la educación en la etapa cíclica y climatérica.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OptionsSection;
