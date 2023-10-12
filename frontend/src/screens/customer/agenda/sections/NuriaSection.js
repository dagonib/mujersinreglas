import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

const NuriaSection = () => {
  return (
    <section className="nuria section">
      <Container fluid="lg">
        <Row className="nuria__img image"></Row>
        <Row className="nuria__row">
          <p className="text">
            "Con esta agenda no te faltarán relatos de esos que te ayudan a
            comprender, a acotar, a sentirte viva, libre y verdadera. Relatos
            que ofrecen otra versión de nosotras mismas, de ti misma. Porque,
            como ocurre con otros episodios de la vida menstrual y sexual
            femenina (la menarquía, la menstruación, el embarazo, el parto, la
            desfloración en el primer coito), necesitamos relatos de placer,
            completud y felicidad. Necesitamos relatos no para compararnos sino
            para espejarnos y en los que conocernos, reconocernos, fortalecernos
            y amarnos."
          </p>
          <p className="sign mt-3">
            Núria Beitia Hernández psicóloga, docente, educadora menstrual y
            sexual.
          </p>
          <p className="sign">
            Madrina, embajadora y escritora de la agenda
            <span> Mujer Sin Reglas</span>.
          </p>
          <Nav.Link
            href="/education"
            className="d-none main-action-button inline-block-button mt-4"
          >
            Quiero leer los texto de Núria
          </Nav.Link>
        </Row>
      </Container>
    </section>
  );
};

export default NuriaSection;
