import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from 'react-bootstrap/Alert';

// Actions
import { createOrder } from '../../../actions/orderActions';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { addDecimals } from '../../../maths/Functions';
import { checkoutStripe } from '../../../actions/paymentActions';

const Provincias = [
  'Álava',
  'Albacete',
  'Alicante',
  'Almería',
  'Asturias',
  'Ávila',
  'Badajoz',
  'Barcelona',
  'Burgos',
  'Cáceres',
  'Cádiz',
  'Cantabria',
  'Castellón',
  'Ceuta',
  'Ciudad Real',
  'Córdoba',
  'Cuenca',
  'Girona',
  'Granada',
  'Guadalajara',
  'Guipúzcoa',
  'Huelva',
  'Huesca',
  'Illes Balears',
  'Jaén',
  'A Coruña',
  'La Rioja',
  'Las Palmas',
  'León',
  'Lérida',
  'Lugo',
  'Madrid',
  'Málaga',
  'Melilla',
  'Murcia',
  'Navarra',
  'Orense',
  'Palencia',
  'Pontevedra',
  'Salamanca',
  'Santa Cruz de Tenerife',
  'Segovia',
  'Sevilla',
  'Soria',
  'Tarragona',
  'Teruel',
  'Toledo',
  'Valencia',
  'Valladolid',
  'Vizcaya',
  'Zamora',
  'Zaragoza',
];

const UE = [
  'Alemania',
  'Austria',
  'Bélgica',
  'Bulgaria',
  'Chipre',
  'Croacia',
  'Dinamarca',
  'Eslovaquia',
  'Eslovenia',
  'Estonia',
  'Finlandia',
  'Francia',
  'Grecia',
  'Hungría',
  'Irlanda',
  'Italia',
  'Letonia',
  'Lituania',
  'Luxemburgo',
  'Países Bajos',
  'Polonia',
  'Portugal',
  'República Checa',
  'Reino Unido',
  'Rumanía',
  'Suecia',
];

const America = [
  'Argentina',
  'Bolivia',
  'Brasil',
  'Chile',
  'Colombia',
  'Ecuador',
  'México',
  'Paraguay',
  'Perú',
  'Uruguay',
  'Venezuela',
  'EEUU',
  'Canadá',
];

const ShippingScreen = () => {
  const dispatch = useDispatch();

  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [shippingPrice, setShippingPrice] = useState(0);

  // Errores Formulario.
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telephoneError, setTelephoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState(false);
  const [regionError, setRegionError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [dniError, setDniError] = useState(false);
  const [itemsPrice, setItemsPrice] = useState(0);

  // Global State --> cartItems
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // Global State --> OrderCreate
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, order } = orderCreate;

  // Patterns
  var patternEmail = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  // var patternTelephone = new RegExp(/^\d{9}$/);

  const handlePrivacyCheckboxChange = () => {
    setIsPrivacyAccepted(!isPrivacyAccepted);
  };

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};

  // Variables Form

  const [name, setName] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.name !== undefined
      ? shippingAddressFromStorage.name
      : ''
  );
  const [email, setEmail] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.email !== undefined
      ? shippingAddressFromStorage.email
      : ''
  );
  const [telephone, setTelephone] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.telephone !== undefined
      ? shippingAddressFromStorage.telephone
      : ''
  );
  const [address, setAddress] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.address !== undefined
      ? shippingAddressFromStorage.address
      : ''
  );
  const [city, setCity] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.city !== undefined
      ? shippingAddressFromStorage.city
      : ''
  );
  const [postalCode, setPostalCode] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.postalCode !== undefined
      ? shippingAddressFromStorage.postalCode
      : ''
  );
  const [region, setRegion] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.region !== undefined
      ? shippingAddressFromStorage.region
      : ''
  );
  const [country, setCountry] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.country !== undefined
      ? shippingAddressFromStorage.country
      : ''
  );

  const [dni, setDni] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.dni !== undefined
      ? shippingAddressFromStorage.dni
      : ''
  );

  const [comentarie, setComentarie] = useState(
    shippingAddressFromStorage !== undefined &&
      shippingAddressFromStorage.comentarie !== undefined
      ? shippingAddressFromStorage.comentarie
      : ''
  );

  const validationForm = () => {
    if (!name) {
      setNameError(true);
      return false;
    } else {
      setNameError(false);
      if (!email || !patternEmail.test(email)) {
        setEmailError(true);
        return false;
      } else {
        setEmailError(false);
        if (!telephone) {
          setTelephoneError(true);
          return false;
        } else {
          setTelephoneError(false);
          if (!address) {
            setAddressError(true);
            return false;
          } else {
            setAddressError(false);
            if (!city) {
              setCityError(true);
              return false;
            } else {
              setCityError(false);
              if (!postalCode) {
                setPostalCodeError(true);
                return false;
              } else {
                setPostalCodeError(false);
                if (!region) {
                  setRegionError(true);
                  return false;
                } else {
                  setRegionError(false);
                  if (!country) {
                    setCountryError(true);
                    return false;
                  } else {
                    setCountryError(false);
                    if (
                      region === 'Ceuta' ||
                      region === 'Melilla' ||
                      region === 'Las Palmas' ||
                      region === 'Santa Cruz de Tenerife' ||
                      UE.includes(country) ||
                      America.includes(country)
                    ) {
                      if (!dni) {
                        setDniError(true);
                        return false;
                      } else {
                        setDniError(false);
                        return true;
                      }
                    }
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(checkoutStripe(order._id));
    }
  });

  // Establecer coste del envío
  useEffect(() => {
    // España
    if (country && country === 'España') {
      // Envío Libros: Hasta 2 unid.
      if (cart.cartItems[0].qty <= 2) {
        setShippingPrice(0); // Es gratuïto
      }
      // Envío Carta Certificada: 3 unid.
      else if (cart.cartItems[0].qty === 3) {
        setShippingPrice(10.14);
      }
      // Envío Paquete: A partir de 4 unid.
      else if (cart.cartItems[0].qty >= 3) {
        // Baleares, Ceuta y Melilla
        if (
          region &&
          (region === 'Illes Balears' ||
            region === 'Melilla' ||
            region === 'Ceuta')
        ) {
          setShippingPrice(20.35);
        }
        // Islas Canarias
        else if (
          region &&
          (region === 'Las Palmas' || region === 'Santa Cruz de Tenerife')
        ) {
          setShippingPrice(28.65);
        }
        // Resto España
        else {
          setShippingPrice(15.95);
        }
      }
    }
    // Andorra
    else if (country && country === 'Andorra') {
      // Envío Libros: Hasta 2 unid.
      if (cart.cartItems[0].qty <= 2) {
        setShippingPrice(0);
      }
      // Envío Carta Certificada: 3 unid.
      else if (cart.cartItems[0].qty === 3) {
        setShippingPrice(10.14);
      }
      // Envío Paquete: A partir de 4 unid.
      else if (cart.cartItems[0].qty >= 3) {
        setShippingPrice(20.35);
      }
    }
    // Países de la UE
    else if (UE.includes(country)) {
      // Envío Internacional: Libros - Zona 1
      if (cart.cartItems[0].qty === 1) {
        setShippingPrice(6.86);
      }
      // Emvío Internacional: Libros - Zona 1
      else if (cart.cartItems[0].qty === 2) {
        setShippingPrice(11.87);
      }
      // Emvío Internacional: Paquete - Zona EU 1 y EU 2
      else if (cart.cartItems[0].qty === 3) {
        setShippingPrice(38.15);
      }
      // Emvío Internacional: Paquete - Zona EU 1 y EU 2
      else if (cart.cartItems[0].qty === 4 || cart.cartItems[0].qty === 5) {
        setShippingPrice(42.55);
      }
      // Emvío Internacional: Paquete - Zona EU 1 y EU 2
      else if (cart.cartItems[0].qty === 6 || cart.cartItems[0].qty === 7) {
        setShippingPrice(46.96);
      }
    }
    // Paíse de America
    else if (America.includes(country)) {
      // Envío Internacional: Libros - Zona 2
      if (cart.cartItems[0].qty === 1) {
        setShippingPrice(12.33);
      }
      // Envío Internacional: Libros - Zona 2
      else if (cart.cartItems[0].qty === 2) {
        setShippingPrice(21.73);
      }
      // Envío Internacional: Paquete - Internacional Zona AM
      else if (cart.cartItems[0].qty === 3) {
        setShippingPrice(46.4);
      }
      // Envío Internacional: Paquete - Internacional Zona AM
      else if (cart.cartItems[0].qty === 4 || cart.cartItems[0].qty === 5) {
        setShippingPrice(55.95);
      }
      // Envío Internacional: Paquete - Internacional Zona AM
      else if (cart.cartItems[0].qty === 6 || cart.cartItems[0].qty === 7) {
        setShippingPrice(65.5);
      }
    } else {
      console.log('Hay un error');
    }
  }, [country, region]);

  //Cálculo del IVA
  useEffect(() => {
    const regionsNOIva = [
      'Ceuta',
      'Melilla',
      'Santa Cruz de Tenerife',
      'Las Palmas',
    ];
    let price;
    if (regionsNOIva.includes(region)) {
      price = cart.cartItems.reduce(
        (accumulator, item) => accumulator + (item.price / 1.21) * item.qty,
        0
      );
    } else {
      price = cart.cartItems.reduce(
        (accumulator, item) => accumulator + item.price * item.qty,
        0
      );
    }
    setItemsPrice(addDecimals(price));
  }, [region]);

  const totalPrice = addDecimals(Number(itemsPrice) + Number(shippingPrice));
  const description = 'Productos Mujer Sin Reglas';
  const methodPaid = 'Stripe';

  // Ejecución Formulario
  const submitHandler = async (e) => {
    e.preventDefault();
    // Reset
    setShowAlert(false);

    if (!isPrivacyAccepted) {
      setShowAlert(true);
      return;
    }

    if (!validationForm()) {
      return;
    }

    const clientItems = {
      name,
      email,
      telephone,
      address,
      city,
      postalCode,
      region,
      country,
      comentarie,
    };
    if (dni) {
      clientItems.dni = dni;
    }

    dispatch(
      createOrder({
        clientItems,
        orderItems: cart.cartItems,
        itemsPrice,
        shippingPrice,
        totalPrice: totalPrice,
        description: description,
        methodPaid: methodPaid,
      })
    );
  };

  return (
    <section className="shipping">
      <Container fluid="lg">
        <Row>
          <h3 className="title title-md-section">Finaliza tu compra</h3>
        </Row>

        <Row className="shipping__row">
          <Form onSubmit={submitHandler}>
            <Col className="formbox">
              {/** Datos de envío */}
              <h4 className="paragraph mb-3">Datos de envío</h4>
              {/** Name */}
              <Form.Group>
                <Form.Label>Nombre y apellidos</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce tu nombre y tus apellidos"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/** Email */}
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introduce tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/** Telephone */}
              <Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce tu teléfono"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/** Address */}
              <Form.Group>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce tu dirección"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/** City */}
              <Form.Group>
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce tu ciudad"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/** PostalCode */}
              <Form.Group>
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce tu código postal"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/** Country */}
              <Form.Group>
                <Form.Label>País</Form.Label>
                <select
                  className="form-select"
                  aria-label="País"
                  onChange={(e) => {
                    const selectedCountry = e.target.value;
                    setCountry(selectedCountry);
                  }}
                  value={country}
                >
                  <option value="" disabled defaultValue>
                    Selecciona un país
                  </option>
                  <option value="España">España</option>
                  <option value="Andorra">Andorra</option>
                  <option value="undefined" className="fw-bold" disabled>
                    Países de la UE
                  </option>
                  {UE?.map((country) => {
                    return (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    );
                  })}
                  <option value="undefined" className="fw-bold" disabled>
                    Países de America
                  </option>

                  {America?.map((country) => {
                    return (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    );
                  })}
                </select>
              </Form.Group>
              <p className="annotation">
                Si tu país no está en la lista contacta con
                agenda@mujersinreglas.info
              </p>

              {/** Region */}
              <Form.Group>
                <Form.Label>Provincia</Form.Label>
                {country && country === 'España' ? (
                  <select
                    className="form-select"
                    aria-label="Provincia"
                    onChange={(e) => {
                      const selectedRegion = e.target.value;
                      setRegion(selectedRegion);
                    }}
                  >
                    <option value="undefined" disabled>
                      Selecciona una provincia
                    </option>

                    {Provincias.map((provincia) => {
                      return (
                        <option key={provincia} value={provincia}>
                          {provincia}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <Form.Control
                    type="text"
                    placeholder="Introduce tu provincia"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  ></Form.Control>
                )}
              </Form.Group>

              <p className="annotation">
                En caso de envío a Ceuta y Melilla, escoge como provincia el
                mismo nombre.
              </p>
              <p className="d-none annotation">
                Si el destino del envío es Islas Canarias, Ceuta, Melilla o un
                país extranjero pon el número de tu documento de identidad en
                comentarios.
              </p>

              {(region === 'Ceuta' ||
                region === 'Melilla' ||
                region === 'Las Palmas' ||
                region === 'Santa Cruz de Tenerife' ||
                UE.includes(country) ||
                America.includes(country)) && (
                <Form.Group>
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Introduce tu DNI"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              )}

              {/** Comentaries */}
              <Form.Group>
                <Form.Label>Comentarios</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Algo que quieras comentarme..."
                  value={comentarie}
                  onChange={(e) => setComentarie(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="group-policy">
                <Form.Check
                  className="checkbox d-flex pr-3"
                  type="checkbox"
                  checked={isPrivacyAccepted}
                  onChange={handlePrivacyCheckboxChange}
                />
                <Form.Label className=" d-m-0 pl-3">
                  He leído y acepto la&nbsp;
                  <a href="/politica-privacidad#top">Política de Privacidad</a>
                </Form.Label>
              </Form.Group>
            </Col>
            {/** Tu pedido */}
            <Col className="orderbox">
              <h4 className="paragraph">Tu pedido</h4>
              {cartItems.length === 0 ? (
                <p>Tu carrito está vacío</p>
              ) : (
                <div className="orderbox__cartItems">
                  <Button href="/cart" className="main-button mod-order p-3">
                    Modificar pedido
                  </Button>
                  {/** Productos del pedido*/}
                  {cartItems.map((item, index) => (
                    <Row key={index} className="orderbox__cartItem">
                      <>
                        <p className="paragraph">
                          <span className="fw-bold">{item.name}</span>
                        </p>
                        {item.type && (
                          <p className="paragraph">Tipo: {item.type}</p>
                        )}
                      </>
                      {region === 'Ceuta' ||
                      region === 'Melilla' ||
                      region === 'Las Palmas' ||
                      region === 'Santa Cruz de Tenerife' ? (
                        <p className="paragraph text-center">
                          {item.qty} x {addDecimals(item.price / 1.21)}€
                          (Deducción de&nbsp;
                          {addDecimals(item.price - item.price / 1.21)}€ de IVA)
                        </p>
                      ) : (
                        <p className="paragraph text-center">
                          {item.qty} x {addDecimals(item.price)}€ (
                          {addDecimals(item.price - item.price / 1.21)}€ de IVA
                          incluido)
                        </p>
                      )}

                      {region === 'Ceuta' ||
                      region === 'Melilla' ||
                      region === 'Las Palmas' ||
                      region === 'Santa Cruz de Tenerife' ? (
                        <p className="paragraph text-end">
                          {addDecimals(item.qty * (item.price / 1.21))}€
                        </p>
                      ) : (
                        <p className="paragraph text-end">
                          {addDecimals(item.qty * item.price)}€
                        </p>
                      )}
                    </Row>
                  ))}

                  {/** Coste del pedido*/}
                  <Row className="orderbox__ordercost">
                    <Col className="">
                      <p>Subtotal</p>

                      <p>{addDecimals(itemsPrice)}€</p>
                    </Col>
                    <Col>
                      <p>Envío</p>
                      <p>{addDecimals(shippingPrice)}€</p>
                    </Col>
                    <Col>
                      <p>Total</p>

                      <p>{totalPrice}€</p>
                    </Col>
                  </Row>
                </div>
              )}
              {showAlert && (
                <Alert className="alert" variant="danger">
                  Debes aceptar la política de privacidad
                </Alert>
              )}
              {nameError && (
                <Alert className="" variant="danger">
                  El nombre es necesario.
                </Alert>
              )}
              {emailError && (
                <Alert className="" variant="danger">
                  El email es necesario.
                </Alert>
              )}
              {telephoneError && (
                <Alert className="" variant="danger">
                  El teléfono es necesario.
                </Alert>
              )}
              {addressError && (
                <Alert className="" variant="danger">
                  La dirección es necesario.
                </Alert>
              )}
              {cityError && (
                <Alert className="" variant="danger">
                  La ciudad es necesario.
                </Alert>
              )}
              {postalCodeError && (
                <Alert className="" variant="danger">
                  El código postal es necesario.
                </Alert>
              )}
              {regionError && (
                <Alert className="" variant="danger">
                  La provincia es necesario.
                </Alert>
              )}
              {countryError && (
                <Alert className="" variant="danger">
                  El país es necesario.
                </Alert>
              )}
              {dniError && (
                <Alert className="" variant="danger">
                  Para envíos al extranjero el Documento de Identidad Nacional
                  es necesario.
                </Alert>
              )}
              {/** Button */}
              <Button type="submit" className="main-btn p-3">
                Proceder al pago
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </section>
  );
};

export default ShippingScreen;
