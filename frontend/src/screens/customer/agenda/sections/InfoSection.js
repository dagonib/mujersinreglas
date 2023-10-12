import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import { getProductDetails } from '../../../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { addDecimals } from '../../../../maths/Functions';

// Assets
import portada from '../../../../assets/images/agenda/carousel/portada.png';
import semana_vista_1 from '../../../../assets/images/agenda/carousel/semana_vista-1.png';
import semana_vista_2 from '../../../../assets/images/agenda/carousel/semana_vista-2.png';
import totebag from '../../../../assets/images/agenda/carousel/popup.png';

import Carousel from 'react-bootstrap/Carousel';
import { addToCart } from '../../../../actions/cartActions';

const InfoSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [index, setIndex] = useState(-1);

  // Global State --> Product Details
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // Función Add To Cart
  const addToCartHandler = () => {
    dispatch(addToCart('64fd82be9f66dc22fff75e9e', qty));
    navigate(`/cart/${'64ddc3f5437d673dad6aad15'}?qty=${qty}#initial`);

    setTimeout(() => {
      const initialElement = document.getElementById('initial');

      // Realiza un scroll suave hacia el elemento encontrado
      if (initialElement) {
        initialElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    dispatch(getProductDetails('64ddc3f5437d673dad6aad15'));
  }, [dispatch]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="info-agenda section">
      <Container fluid="lg">
        <Row className="info-agenda__row">
          <Col className="info-agenda__left">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item key="1">
                <img
                  src={totebag}
                  alt="Imagen la menopausia es evolución"
                  className="image back"
                />
              </Carousel.Item>
              <Carousel.Item key="2">
                <img
                  src={portada}
                  alt="Imagen de la agenda Mujer Sin Reglas 2024"
                  className="image back"
                />
              </Carousel.Item>
              <Carousel.Item key="3">
                <img
                  src={semana_vista_1}
                  alt="Imagen de la agenda Mujer Sin Reglas 2024"
                  className="image back"
                />
              </Carousel.Item>
              <Carousel.Item key="4">
                <img
                  src={semana_vista_2}
                  alt="Imagen la menopausia es evolución"
                  className="image back"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="info-agenda__right">
            <Row className="maininfo mb-4">
              <div className="prizebox">
                <p className="prize">{addDecimals(product?.price)}€</p>
                <p className="d-none prize-before">22.00 €</p>
              </div>
              <p className="detail-prize">
                (IVA 21% y gastos de envío incluídos*)
              </p>
            </Row>

            <Row className="warning">
              <p>
                Período de venta: 01 octubre hasta agotar stock
                <br /> ¡REGALO! Sólo del 01 al 15 de octubre, con la compra de
                tu agenda MSR 2024, una preciosa Tote Bag de regalo.
              </p>
            </Row>
            <Row className="sellbox">
              <Col className="btnCounter">
                <Button
                  onClick={() => {
                    if (qty <= 1) {
                      setQty(1);
                    } else {
                      setQty(qty - 1);
                    }
                  }}
                  className="main-btn"
                >
                  -
                </Button>
                <h6 className="number">{qty}</h6>
                <Button
                  onClick={() => {
                    if (qty > 6) {
                      setQty(7);
                    } else {
                      setQty(qty + 1);
                    }
                  }}
                  className="main-btn"
                >
                  +
                </Button>
              </Col>

              <Button
                onClick={addToCartHandler}
                className="main-btn"
                type="button"
                disabled={product?.countInStock === 0}
              >
                Añadir al Carrito
              </Button>
            </Row>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Características</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <p className="info">Páginas: 250.</p>
                    <p className="info">Encuadernación: Wire-O.</p>
                    <p className="info">
                      Papel: FSC Coral Book White, 90 g/m².
                    </p>
                    <p className="info">
                      Cubierta: Cartulina Invercote Creator, 280 g/m².
                    </p>
                    <p className="info">Idioma: Castellano.</p>
                    <p className="info">Peso: 500gr.</p>
                    <p className="info">
                      Dimensiones: DIN A5 (14,8x21 cms) (vertical).
                    </p>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Descripción</Accordion.Header>
                <Accordion.Body>
                  <p className="info">
                    Mujer Sin Reglas. Diario íntimo de tu metamorfosis hacia la
                    madurez se consolida por cuarto año consecutivo como la
                    primera y única agenda anual específica para la mujer que se
                    encuentra en la transición menopáusica y la menopausia.
                    <br />
                    En sus diversas secciones "Registro semanal", "Placeres de
                    la semana", "Emoción predominante", "Registro menstrual" (si
                    aún menstrúas) ...podrás escribir sobre tus cambios
                    cíclicos, físicos, psicoespirituales, sexuales y sociales.
                    <br />
                    Los 40 textos "Vívete" junto con los "Relatos de luna"
                    completarán el gran valor y potencia transformadora que
                    tiene esta agenda en cada mujer. No te pierdas la
                    presentación de Núria Beitia Hernández, sus palabras son
                    bálsamo para el alma.
                    <br />
                    Mujer Sin Reglas es una manera de estar en el mundo y esta
                    preciosa agenda será un recurso íntimo para acompañarte todo
                    el 2024.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Creación</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <p className="info">
                      Positiva y fascinada con la inminente llegada de mi etapa
                      en menopausia, necesité un lugar donde ir escribiendo
                      sobre los signos y sensaciones que comenzaron a darme el
                      cuerpo y la psique. Fue en el año 2020, con 47 años,
                      cuando autoedité por primera vez esta agenda anual
                      específica para la etapa vital de cambios evidentes que yo
                      estaba viviendo.
                      <br />
                      Mis amigas corrieron la voz y esta creación se convirtió
                      en un poderoso recurso para otras mujeres en la transición
                      hacia la menopausia o ya en menopausia (climaterio).
                      <br />
                      "Tiene el potencial de ser además de una agenda y diario
                      íntimo, un material divulgativo de utilidad para el
                      autoconocimiento y el cuidado de la salud" convenimos con
                      las compañeras de la Asociación La vida en rojo.
                      <br />
                      Me siento muy feliz de aportar y acompañar con esta bella
                      creación a cientos de mujeres repartidas por todo el
                      territorio español y el extranjero. Mil gracias al
                      precioso equipo de edición con el que cuento y la
                      Asociación La vida en rojo desde la cual trabajamos por
                      cambiar el actual paradigma de desinformación, tabú y
                      estigma que pesa sobre la menstruación, el ciclo y la
                      menopausia/climaterio.
                    </p>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Adecuada</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <p className="info">
                      La agenda anual Mujer Sin Reglas es adecuada para la mujer
                      +40 y cualquier persona que desee tomar consciencia de la
                      poderosa etapa de cambios que acontecerá en los años de la
                      perimenopausia y la entrada en menopausia (climaterio).
                      <br />
                      También es un bello y poderoso recurso para profesionales
                      de la salud, terapeutas, educadoras menstruales,
                      activistas y demás personas comprometidas con la educación
                      y la divulgación en salud y ciclos femeninos.
                    </p>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Edición</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <ul className="info info-list">
                      <li>Creación: Carolina Ackermann Barreiro</li>
                      <li>Coordinación: Daylí Remuiñan Ackermann</li>
                      <li>Presentación: Núria Beitia Hernández @nuriabeitia</li>
                      <li>
                        Ilustración portada: Laie Toldrà Barbarà @laietoldra
                      </li>
                      <li>
                        Ilustraciones y dibujos interiores: Rocío Remuiñan
                        Ackermann @art.rows
                      </li>
                      <li>
                        Con el soporte de la Asociación de cultura menstrual en
                        Cataluña,
                        <span className="fst-italic"> La vida en rojo</span>
                      </li>
                    </ul>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <p className="mt-4 detail-prize">
              * Para envíos por correo postal ordinario dentro de España
              peninsular e islas.
            </p>
            <Row className="extrainfo">
              <Nav.Link href="/condiciones-compra" className="link-button">
                Términos y condiciones de venta
              </Nav.Link>
              <Nav.Link href="/preguntas-frecuentes" className="link-button">
                Preguntas frecuentes
              </Nav.Link>
              <Nav.Link href="/guia-uso" className="link-button">
                Guía de uso
              </Nav.Link>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InfoSection;
