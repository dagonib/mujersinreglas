import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
// Assets
import Image1 from '../../../../assets/images/education/image1.jpeg';
import Image2 from '../../../../assets/images/home/education-down.png';
import BackImage from '../../../../assets/images/education/back-image.png';

const EducationSection = () => {
  return (
    <section className="education">
      <Container fluid="lg">
        <Row className="education__up">
          <h1 className="title-md-section">
            Educación climatérica para el bienestar, la salud y el gozo
          </h1>
          <Col className="image-box">
            <img
              src={BackImage}
              alt="Imagen la menopausia es evolución"
              className="image back"
            />
            <img
              src={Image1}
              alt="Imagen la menopausia es evolución"
              className="image front"
            />
          </Col>
        </Row>
        <Row className="education__down">
          <Col className="image-box">
            <img
              src={BackImage}
              alt="Imagen la menopausia es evolución"
              className="image back-alt"
            />
            <img
              src={Image2}
              alt="Imagen la menopausia es evolución"
              className="image"
            />
          </Col>
          <Col className="content-text">
            <p className="paragraph">
              La mayoría de personas tenemos información distorsionada o
              incompleta sobre la menopausia y el climaterio.
            </p>
            <p className="paragraph mt-1">
              Te ofrezco mi propuesta educativa desde un abordaje con
              perspectiva
              <span className="paragraph paragraph-alt">
                &nbsp;feminista, positiva, integral, realista y
                emancipatoria&nbsp;
              </span>
              para bienvivir el climaterio.
            </p>
            <Nav.Link href="/educacion" className="main-btn mt-2">
              Quiero ver
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EducationSection;
