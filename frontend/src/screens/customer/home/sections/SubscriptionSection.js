import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '../../../../components/Icon';
import Alert from 'react-bootstrap/Alert';
import Solicitud from '../../../../assets/pdf/solicitud.pdf';

const SubscriptionSection = () => {
  const form = useRef();
  const pdfLinkRef = useRef();
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handlePrivacyCheckboxChange = () => {
    setIsPrivacyAccepted(!isPrivacyAccepted);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isPrivacyAccepted) {
      setShowAlert(true);
      return;
    }
    emailjs.sendForm(
      'service_3ao7hsn',
      'template_1tobit8',
      form.current,
      'NQNa-Q1_aDw6_2e0O'
    );

    pdfLinkRef.current.click();

    setShowAlert(false);
    e.target.reset();
  };

  return (
    <section className="subscription">
      <Container fluid="lg">
        <Row className="subscription__row">
          <Col className="subscription__data">
            <p className="paragraph">
              DOCUMENTO DESCARGABLE: "Solicitud de atención sanitaria pública,
              integral y de calidad en menopausia y climaterio".
            </p>
          </Col>
          <Col className="subscription__formbox">
            <Form
              ref={form}
              onSubmit={sendEmail}
              className="subscription__form"
            >
              <Form.Group controlId="email" className="w-100">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Introduce tu email para descargarlo"
                  className="input text-input-alt"
                  required
                />
              </Form.Group>
              <Button type="submit" className="button">
                <Icon icon="bi bi-cursor-fill" color="#fbfbfb" />
              </Button>
              <Form.Group controlId="checkbox" className="d-flex">
                <Form.Check
                  className="checkbox me-2"
                  type="checkbox"
                  checked={isPrivacyAccepted}
                  onChange={handlePrivacyCheckboxChange}
                />
                <Form.Label className=" d-flex flex-column flex-md-row align-items-center flex-wrap d-m-0">
                  He leído y acepto la&nbsp;
                  <a href="/politica-privacidad" className="privacy-btn">
                    Política de Privacidad
                  </a>
                </Form.Label>
              </Form.Group>
            </Form>
            {showAlert && (
              <Alert className="alert" variant="danger">
                Debes aceptar la política de privacidad
              </Alert>
            )}
            <a
              ref={pdfLinkRef}
              download="solicitud-atención-sanitaria"
              href={Solicitud}
              className="d-none"
            >
              Download PDF
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscriptionSection;
