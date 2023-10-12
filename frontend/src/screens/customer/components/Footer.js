import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

//Images
import logo_mys from '../../../assets/logos/gray/mys.png';
import logo_directa from '../../../assets/logos/gray/directa.png';
import logo_diario16 from '../../../assets/logos/gray/diario16.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="bg-dark m-0 y-5">
        <Container className="py-5 px-4">
          {/** Información adicional */}
          <Row className="d-flex align-items-center m-0 mt-5">
            {/*<!-- Proyecto -->*/}
            <Col md={4} className="text-center p-0 mb-4">
              <p className="footer-title m-0">Proyecto</p>
              <p className="footer-text mt-2 m-0">
                Mujer Sin Reglas. Carolina Ackermann
              </p>
              <p className="footer-text mt-2 m-0">
                Bienestar consciente en la menopausia y el climaterio
              </p>
              {/*<!-- Asociación -->*/}
              <p className="footer-title mt-2 m-0">Asociación</p>
              <p className="footer-text mt-2 m-0">
                Asociación de cultura menstrual La vida en rojo
              </p>
              <p className="footer-text mt-2 m-0">
                www.lavidaenrojo.org @lavidaenrojo_asociacion
              </p>

              {/*<!-- Diseño Web -->*/}
              <p className="footer-title mt-2 m-0">Diseño Web</p>
              <p className="footer-text mt-2 m-0">
                Web: David González Ibáñez{' '}
                <a
                  href="https://www.linkedin.com/in/david-gonzalez-ibanez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </p>
              <p className="footer-text mt-2 m-0">
                Fotos: Clara García i Ortés @clarago
              </p>
              <p className="footer-text mt-2 m-0">
                Dibujos: Rocío Remuiñan Ackermann @art.rows
              </p>
            </Col>
            {/*<!-- RRSS -->*/}
            <Col md={4} className="text-center p-0 mb-4">
              <p className="footer-title m-0">¿Seguimos conectadas?</p>
              {/* <RRSS
                align="d-flex flex-row justify-content-center mt-2 m-0"
                size="25"
              /> */}
              <Row className="d-flex flex-column mt-2 m-0 p-0">
                <Col className="d-flex justify-content-center align-items-center m-0 p-0">
                  {/* <BsFillEnvelopeFill className="point" /> */}
                  <p className="footer-text ps-2 ml-2 m-0">
                    agendaclimaterio@gmail.com
                  </p>
                </Col>
                <Col className="d-flex justify-content-center align-items-center mt-2 m-0 p-0">
                  {/* <BsPhone className="point" /> */}
                  <p className="footer-text ps-2 ml-2 m-0">640 10 61 30</p>
                </Col>
                <Col className="d-flex justify-content-center align-items-center mt-2 m-0 p-0">
                  {/* <GoLocation className="point" /> */}
                  <p className="footer-text ps-2 ml-2 m-0">
                    Castelldefels. Barcelona. España
                  </p>
                </Col>
              </Row>
            </Col>
            {/*<!-- Navigation -->*/}
            <Col md={4} className="text-center p-0">
              <p className="footer-title m-0">Navegación</p>
              <Nav className="d-flex flex-column">
                <a className="footer-text  mt-3 p-0" href="/bienvenida#hero">
                  Bienvenida
                </a>
                <a className="footer-text  mt-3 p-0" href="/educacion#hero">
                  Educación
                </a>
                <a className="footer-text  mt-3 p-0" href="/agenda#hero">
                  Agenda
                </a>
                <a className="footer-text  mt-3 p-0" href="/contacta#hero">
                  Contacta
                </a>
              </Nav>
            </Col>
          </Row>

          <Row className="d-flex flex-column align-items-center justify-content-sm-center mt-4">
            <Col className=" p-0">
              <p className="footer-title text-center m-0">
                Mi presencia en los medios
              </p>
            </Col>
            <Col className="d-flex flex-wrap align-items-center justify-content-center m-0 p-0">
              {/**MyS */}
              <Nav.Link
                sm={4}
                href="https://matriz.net/numero-50/atencion-sanitaria-en-menopausia-climaterio-recogida-de-informacion-testimonios-el-estado-espanol/"
                target="_blank"
                className="w-auto px-2 p-0"
              >
                <Image className="img_logo p-3" src={logo_mys} />
              </Nav.Link>
              {/**La Directa */}
              <Nav.Link
                sm={4}
                href="https://directa.cat/visibilitzar-el-climateri/"
                target="_blank"
                className="w-auto px-2 p-0"
              >
                <Image className="img_logo p-3" src={logo_directa} />
              </Nav.Link>
              {/**Diario 16*/}
              <Nav.Link
                sm={4}
                href="https://diario16plus.com/10-anos-de-biografia-menstrual-invisibilizada/"
                target="_blank"
                className="w-auto px-2 p-0"
              >
                <Image className="img_logo p-3" src={logo_diario16} />
              </Nav.Link>
            </Col>
            <Col className="d-flex flex-column text-align-center text-center p-0">
              <p className="footer-text mt-2 m-0">
                @MUJERSINREGLAS2023 | Todos los derechos reservados
              </p>
              <a
                className="footer-text  mt-3 p-0"
                href="/politica-privacidad#top"
              >
                Politica Privacidad
              </a>
            </Col>
          </Row>
        </Container>
      </Row>
    </footer>
  );
};

export default Footer;
