import React, { useRef, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';

const ContactFormSection = () => {
  const form = useRef();

  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
      'template_4be2ue6',
      form.current,
      'NQNa-Q1_aDw6_2e0O'
    );

    setShowAlert(false);
    setShowSuccess(true);
    e.target.reset();
  };

  return (
    <section className="contactform">
      <Container fluid="lg">
        <Row className="contactform__row">
          <Col className="contactform__titlebox">
            <p>Ponte en contacto</p>
          </Col>
          <Form ref={form} onSubmit={sendEmail} className="contactform__form">
            <Form.Group controlId="name" className="w-100">
              <Form.Label>Tu nombre</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Introduce tu nombre "
                className=""
                required
              />
            </Form.Group>
            <Form.Group controlId="email" className="w-100">
              <Form.Label>Tu email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Introduce tu email"
                className=""
                required
              />
            </Form.Group>

            <Form.Group controlId="asunto" className="w-100">
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                name="asunto"
                type="text"
                placeholder="Asunto"
                className=""
                required
              />
            </Form.Group>

            <Form.Group controlId="message" className="w-100">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                type="text"
                placeholder="Explícame"
                className=""
                required
              />
            </Form.Group>

            <Form.Group controlId="checkbox" className="d-flex">
              <Form.Check
                className="checkbox me-2"
                type="checkbox"
                checked={isPrivacyAccepted}
                onChange={handlePrivacyCheckboxChange}
              />
              <Form.Label className=" d-flex flex-column flex-md-row align-items-center flex-wrap d-m-0">
                He leído y acepto la&nbsp;
                <a href="/politica-privacidad" className="">
                  Política de Privacidad
                </a>
              </Form.Label>
            </Form.Group>

            {showAlert && (
              <Alert className="alert mt-3" variant="danger">
                Debes aceptar la política de privacidad
              </Alert>
            )}

            <Button type="submit" className="main-btn">
              Enviar
            </Button>
            {showSuccess && (
              <Alert className="alert mt-3" variant="success">
                Mensaje enviado correctamente
              </Alert>
            )}
          </Form>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormSection;
