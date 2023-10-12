import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const PhraseSection = () => {
  return (
    <section className="phrase">
      <Container fluid="lg">
        <Row className="contact-phrase">
          <p>
            *MujerSinReglas* es potencia revolucionaria para vivir la menopausia
            desde la **Curiosidad, la Complicidad y la Consciencia**
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default PhraseSection;
