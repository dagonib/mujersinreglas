import React from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Educacion from '../../../../assets/images/education/image2.png';
import fundamentos from '../../../../assets/pdf/manifiesto.pdf';

const HeroSection = () => {
  return (
    <section className="hero-education" id="hero">
      <Container fluid="lg">
        <Row className="content">
          <Col className="hero-education__header">
            <div className="hero-education__header-image">
              <img
                alt="Imagen de una charla realizada por Carolina Ackermann"
                src={Educacion}
                className=" image"
              />
            </div>
            <h1 className="hero-education__header-text">
              Encuentra la propuesta educativa que mejor se adapte a tu grupo de
              amigas, institución, colectivo…
            </h1>
          </Col>
          <Col className="hero-education__def">
            <p className="hero-education__def-title">EDUCACIÓN CLIMATÉRICA</p>

            <div className="hero-education__def-text">
              <p className="hero-education__def-text--left">
                Es una práctica educativa con perspectiva de género, que busca
                acompañar a las mujeres y a la sociedad en su conjunto, en el
                entendimiento y la resignificación de la etapa climatérica, y
                que va más allá de la visión clínica del proceso.
              </p>
              <p className="hero-education__def-text--right">
                Educar en menopausia y climaterio es fundamental para empoderar
                a las mujeres con información precisa y estrategias de
                autocuidado que les permitan navegar de manera saludable y
                consciente esta poderosa etapa de cambios.
              </p>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href={fundamentos}
              className="main-btn"
            >
              Lee los Fundamentos de la Educación Climatérica
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
