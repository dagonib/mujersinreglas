import React, { useLayoutEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

const PrivacyPolicyScreen = () => {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="information" id="top">
      <Container fluid="lg">
        <Row className="information__header">
          <h1 className="information__header--title">Política de Privacidad</h1>
        </Row>
        <Row className="information__content">
          <Col className="information__content--item">
            <p className="information__content--text mb-1">
              La privacidad de las clientas y usuarias es prioritaria para MUJER
              SIN RELGAS. Nos preocupamos de que tu experiencia de compra sea
              100% segura.
            </p>
            <p className="information__content--text mb-1">
              Tu confianza y privacidad son lo más importante para nosotras, por
              eso, te explicamos a continuación, de forma sencilla y
              transparente qué hacemos exactamente con tu información personal.
            </p>
            <p className="information__content--text mb-1">
              Si te queda alguna duda o quieres más información a este respecto
              escríbenos a hola@mujersinreglas.info y te ayudaremos.
            </p>
          </Col>
          <Accordion className="information__accordion">
            <Accordion.Item eventKey="0" flush>
              <Accordion.Header>
                <h4 className="information__content--title">
                  ¿Quién es el responsable del tratamiento?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="information__content--text mb-1">
                  El responsable de tu tratamiento es quien decide la finalidad
                  para la que se utilizan tus datos que, en este caso es
                  Proyecto Mujer Sin Reglas, Carolina Ackermann con domicilio en
                  Calle Cervantes, 08860, Castelldefels, Barcelona, con número
                  de DNI 45793377D.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" flush>
              <Accordion.Header>
                <h4 className="information__content--title">
                  ¿Qué datos tuyos recogemos con la finalidad de compra y
                  gestión de tu producto/s?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="information__content--text mb-1">
                  En caso de que adquieras algún producto de Mujer Sin Reglas,
                  te pediremos los datos necesarios para crear tu cuenta de
                  usuaria a través de la cual podrás realizar tu pedido. Así
                  mismo, utilizaremos tus datos para:
                </p>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Formalizar tu pedido, gestionar adecuadamente tu compra y
                  hacértela llegar.
                </li>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Informarte del estado del pedido y de cualquier otra cuestión
                  que sea necesaria (únicamente por la vía que nos indiques).
                </li>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Gestionar los pagos.
                </li>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Enviarte tu factura de compra.
                </li>
                <p className="information__content--text mb-1">
                  La base legal que nos permite hacer este tratamiento de tus
                  datos es la relación contractual entre las partes y, en
                  algunos casos concretos, tu consentimiento.
                </p>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Cuando solicitemos tus datos te informaremos de cuáles son
                  necesarios para hacer tu compra y cuáles son opcionales, así
                  podrás decidir los que deseas o no proporcionar.
                </li>
                <p className="information__content--text mb-1">
                  Las bases legales que nos permiten tratar tus datos en estos
                  casos son la relación comercial que creas con{' '}
                  <span className="italic">Mujer Sin Reglas </span>y tu
                  consentimiento.
                </p>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  En caso de que utilices cualquiera de las vías que te
                  ofrecemos para contactar con nosotros, utilizaremos tus datos
                  de contacto para atender y resolver tu consulta de acuerdo con
                  la naturaleza de la misma lo que incluye contactar contigo
                  (por la misma vía) en caso de ser necesario.
                </li>
                <p className="information__content--text mb-1">
                  La base legal que nos permite llevar a cabo este tratamiento
                  de tus datos es tu consentimiento, que nos prestas de forma
                  expresa al enviar tu solicitud de contacto, y nuestro interés
                  legítimo en resolver la cuestión que nos plantees.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" flush>
              <Accordion.Header>
                <h4 className="information__content--title">
                  Newsletter, email y descarga de documentos
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Si eres clienta, desde los correos electrónicos de
                  agenda@mujersinreglas.info o agendaclimaterio@gmail.com te
                  enviaremos comunicaciones comerciales con la intención de
                  informarte sobre promociones de los productos iguales o
                  similares a los que has adquirido, salvo que por supuesto, nos
                  indiques que no deseas recibirlas respondiendo “baja”.
                </li>
                <p className="information__content--text mb-1">
                  La base legal que nos permite hacerlo en este caso es el
                  interés legítimo.
                </p>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  En caso de que lo solicites expresamente desde la web
                  mujersinreglas.info, podemos enviarte documentos de tu interés
                  tal es: "
                  <span className="italic">
                    Atención sanitaria integral y de calidad en la menopausia y
                    climaterio
                  </span>
                  "
                </li>

                <p className="information__content--text mb-1">
                  La base legal que nos permite llevar a cabo este tratamiento
                  de tus datos y el envío de documentos es tu consentimiento,
                  que nos prestas de forma expresa al hacer tu solicitud de
                  recibo y descarga de documentos.
                </p>

                <li className="information__content--text information__content--list ps-3 mb-1">
                  En el caso de que lo solicites expresamente recibirás nuestra
                  newsletter con información sobre charlas y talleres que
                  organizamos desde la Asociación{' '}
                  <span className="italic">La vida en rojo</span> y{' '}
                  <span>Mujer Sin Reglas</span>; así como de otros eventos y
                  acciones que pueden interesarte.
                </li>

                <p className="information__content--text mb-1">
                  La base legal que nos permite llevar a cabo este tratamiento
                  de tus datos y el envío de la newsletter es tu consentimiento,
                  que nos prestas de forma expresa al rellenar el formulario "Me
                  sumo" de la plataforma de marketing Brevo. Los términos de
                  usos de dicha plataforma los encuentras aquí:
                  https://www.brevo.com/es/legal/termsofuse/
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" flush>
              <Accordion.Header>
                <h4 className="information__content--title">
                  Duración del tratamiento
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="information__content--text mb-1">
                  En el caso de los datos personales suministrados para
                  facturación y compra de productos o servicios, serán guardados
                  por el tiempo legalmente aplicable.
                </p>
                <p className="information__content--text mb-1">
                  En el caso de los datos personales suministrados para
                  boletines comerciales electrónicos será por el tiempo que el
                  titular de los datos desee permanecer en la lista de
                  suscripción, por lo que podrá darse de baja en el momento que
                  así lo desee, de forma automática como se indica en cada
                  boletín, o escribiendo a hola@mujersinreglas.info. Los datos
                  personales proporcionados se conservarán mientras se mantenga
                  la relación y no se solicite su supresión por parte del
                  interesad@.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" flush>
              <Accordion.Header>
                <h4 className="information__content--title">
                  ¿A quién comunicamos tus datos?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="information__content--text mb-1">
                  Mujer Sin Reglas necesita el apoyo de terceros para ofrecer
                  adecuadamente sus servicios y productos, con los cuales
                  celebra los debidos acuerdos de confidencialidad y verifica el
                  cumplimiento de las normativas sobre protección de datos
                  personales.
                </p>
                <p className="information__content--text mb-1">
                  Los datos suministrados a estos terceros no podrán ser
                  utilizados para otros fines no autorizados por el titular de
                  los datos.
                </p>
                <p className="information__content--text mb-1">
                  En cumplimiento de los principios de información y
                  transparencia, se hace saber que estos terceros son:
                </p>
                <p className="information__content--text mb-1">
                  <span className="bold">Google:</span> Herramienta utilizada
                  para el posicionamiento web. Este servicio está a cargo de la
                  empresa Google LLC, ubicada en Mountain View, California,
                  Estados Unidos de América, cuenta con la suscripción del
                  Escudo de la privacidad entre la UE-EE.UU. que puede ser
                  consultado en
                  https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active.
                  Si desea obtener más información sobre su política de
                  privacidad puede consultar:
                  https://policies.google.com/privacy
                </p>
                <p className="information__content--text mb-1">
                  <span className="bold">PayPal </span>(Europe) S.à r.l. et Cie,
                  S.C.A: empresa utilizada para gestionar los pagos mediante
                  tarjeta de débito y crédito en el sitio web. Ubicada en 22-24
                  Boulevard Royal L-2449, Luxemburgo. Para más información puede
                  visitar
                  https://www.paypal.com/es/webapps/mpp/ua/privacy-full?locale.x=es_ES
                </p>
                <p className="information__content--text mb-1">
                  <span className="bold">Stripe</span> Inc: utilizada para
                  gestionar los pagos mediante tarjeta de débito y crédito en el
                  sitio web. Esta empresa está ubicada en los Estados Unidos,
                  posee un convenio de seguridad denominado Escudo de
                  Privacidad, conforme a las exigencias del Comité Europeo de
                  Protección de Datos que puede consultarse aquí
                  https://www.privacyshield.gov/participant?id=a2zt0000000TQOUAA4&status=Active.
                  Para más información en https://stripe.com/us/privacy
                </p>
                <p className="information__content--text mb-1">
                  <span className="bold">Brevo:</span> Plataforma de marketing
                  para el envío de newsletter que cuenta con la certificación
                  ISO 27001: 2013 que es uno de los estándares internacionales
                  de seguridad de la información más reconocidos. La
                  certificación de Brevo (ex Sendinblue) demuestra nuestro
                  compromiso de mantener un marco de seguridad de datos integral
                  y de varios niveles. Política de privacidad Protección de
                  datos personales: https://www.brevo.com/es/legal/termsofuse/
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" flush>
              <Accordion.Header>
                <h4 className="information__content--title">
                  ¿Cuáles son tus derechos cuando nos facilitas tus datos
                  personales?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="information__content--text mb-1">
                  Como titular de tu información personal, tienes derecho a:
                </p>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Acceder a los datos que tratamos sobre ti y a información
                  detallada sobre el tratamiento que hacemos.
                </li>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Puedes solicitar que se rectifique tu información, si
                  consideras que es inexacta.
                </li>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  En algunos casos puedes solicitar que tus datos sean
                  suprimidos, puedes oponerte a que los usemos y puedes limitar
                  el tratamiento que hacemos de ellos.
                </li>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Tienes derecho a la portabilidad de tus datos, es decir, a
                  recibir tus datos o que se los entreguemos a un tercero en un
                  formato que permita que éste los trate.
                </li>
                <li className="information__content--text information__content--list ps-3 mb-1">
                  Por supuesto, si consideras que no hemos atendido
                  correctamente tus derechos o quieres más información al
                  respecto puedes pedirla a la Agencia Española de Protección
                  (www.aepd.es).
                </li>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6" flush>
              <Accordion.Header>
                <h4 className="information__content--title">
                  ¿Cómo he obtenido tus datos?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="information__content--text mb-1">
                  Los datos personales que trato en www.mujersinreglas.info
                  proceden de los formularios que se encuentran en esta web y
                  que has cumplimentado voluntariamente y aceptado.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7" flush>
              <Accordion.Header>
                <h4 className="information__content--title">
                  ¿Dudas? ¿Problemas? ¿Más información?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="information__content--text mb-1">
                  Escríbenos a hola@mujersinreglas.info y te ayudamos.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </section>
  );
};

export default PrivacyPolicyScreen;
