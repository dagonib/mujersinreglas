import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const PhraseSection = () => {
  return (
    <section className="phrase section">
      <Container fluid="lg">
        <Row className="phrase__row">
          <p className="paragraph">
            Conoce lo mejor del empoderamiento, la espiritualidad y el bienestar
            a través de la adquisición de tu agenda 2023 “Mujer Sin Reglas,
            diario íntimo de tu metAMORfosis hacia la madurez”.
          </p>
          <p className="paragraph mt-2">
            Podrás registrar tus cambios físicos, psicoespirituales y sociales,
            a la vez que escribes y organizas tus actividades diarias junto con
            leer textos de mujeres científicas, feministas, escritoras,
            sanitarias, sabias en las secciones “Vívete” de la agenda.
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default PhraseSection;
