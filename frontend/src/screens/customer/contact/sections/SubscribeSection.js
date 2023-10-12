import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';

const SubscribeSection = () => {
  return (
    <section className="subscribe">
      <Container fluid="lg">
        <Row className="contact-subscribe">
          <p>
            Para saber de las actividades que ofrezco desde mi proyecto y desde
            la Asociación <span className="fst-italic">La vida en rojo</span>,
            te invito a sumarte a recibir mi newsletter.
          </p>
          <Button
            href="https://0dc39ca9.sibforms.com/serve/MUIFANveoirH_0fyN2KLx90A1E8bOwRv2cYVqF_LzEkm4pt12Zv3IQQmSqJQ03iLz1SVu-pkeQW7pndr101_dUhC93LA4UoLmHQI37oFdI5DCdf5PtcdBWpj3fQO_Xf2DjIyioS1Hu24IcYBV3c2pDX6-PQYTkTJkUopvZo18DT9M2u4lIEVI5KNBCpJCgAlvgAfBZ9AjIuwWXy-"
            className="main-btn"
            target="_blank"
          >
            Me sumo
          </Button>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeSection;
