import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BuyConditionsScreen = () => {
  return (
    <section className="information">
      <Container fluid="lg">
        <Row className="information__header">
          <a href="/agenda" className="information__header--btn main-btn">
            Volver
          </a>
          <h1 className="information__header--title">
            Términos y Condiciones de Venta
          </h1>
        </Row>
        <Row className="information__content">
          <Col className="information__content--item">
            <h4 className="information__content--title">Compra</h4>
            <p className="information__content--text mb-1">
              Tómate un minuto porque te pedimos algunos datos relacionados con
              la dirección de envío y contacto.
            </p>
            <p className="information__content--text mb-1">
              Para finalizar la compra, necesitarás tener a mano la tarjeta de
              crédito.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">Envío</h4>
            <p className="information__content--text mb-1">
              Todos los paquetes los enviamos por{' '}
              <span className="bold">Correos España</span> y son:
            </p>
            <li className="information__content--text information__content--list mb-1">
              <span className="bold">Envíos ordinarios (1 a 2 agendas):</span>
            </li>
            <p className="information__content--text marginLeft mb-1">
              A diferencia de otros servicios más completos, como el envío
              certificado o el envío con seguimiento, el envío ordinario no
              ofrece características adicionales como la confirmación de
              entrega, el seguimiento detallado del paquete o la garantía de
              entrega en un plazo específico.
            </p>
            <p className="information__content--text marginLeft mb-1">
              <span className="bold">
                El coste del envío ordinario está incluido en el precio de la
                agenda.
              </span>
            </p>
            <li className="information__content--text information__content--list mb-1">
              <span className="bold">Envío certificado: </span>
            </li>
            <p className="information__content--text marginLeft mb-1">
              A partir de la compra de 3 agendas se te aplicará el coste de
              envío certificado y podremos ofrecerte el número de seguimiento
              del paquete.
            </p>
            <p className="information__content--text marginLeft mb-1">
              Si el envío es a un país fuera de España, verás que en la pasarela
              de pago se aplicará el coste del envío al ser certificado.
            </p>
            <p className="information__content--text  mb-1">
              <span className="underline">A tener en cuenta. </span>La agenda te
              llega en un sobre y si no cabe en el buzón, Correos España o la
              agencia de correos correspondiente a tu país, dejará un aviso para
              que la recojas en la oficina más cercana. Antes de reclamar,
              pregunta a tu vecin@ si se la dejaron allí o a tu Ayuntamiento si
              vives en zona rural.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">
              ¿Cómo sé que he comprado mi agenda MSR?
            </h4>
            <p className="information__content--text mb-1">
              Una vez hayas realizado el pago podrás descargar la factura en pdf
              que confirma el pago y garantiza que se te entregará la agenda
              Mujer Sin Reglas.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">Horario de envío</h4>
            <p className="information__content--text mb-1">
              Los envíos se hacen diariamente de lunes a viernes, de 17 a 19hs.
              Si pagas tu agenda después de esa hora, tu agenda será enviada al
              día hábil siguiente en dicho horario.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">
              ¿Puedo comprar la agenda Mujer Sin Reglas si vivo fuera de España?
            </h4>
            <p className="information__content--text mb-1">
              Sí. Hacemos envíos a países donde correos nos garantiza que puede
              hacer la entrega. Pregunta cuál es el valor adicional en concepto
              de envío certificado a tu país.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">
              El paquete no llega?
            </h4>
            <p className="information__content--text mb-1">
              Si tu paquete se pierde o llega en mal estado, ponte en contacto
              con nosotras. Haremos todo lo que esté en nuestra mano por
              solucionar el problema.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">Datos incorrectos</h4>
            <p className="information__content--text mb-1">
              Los gastos de reenvío de agenda/s debido a errores en los datos
              personales y la dirección postal proporcionados en el momento de
              la compra, irán a cargo del comprador/ra.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">Contacta</h4>
            <p className="information__content--text mb-1">
              Cualquier dificultad u otra aclaración, contacta conmigo:
            </p>
            <p className="information__content--text mb-1">
              Whatsapp: 640 10 61 30.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BuyConditionsScreen;
