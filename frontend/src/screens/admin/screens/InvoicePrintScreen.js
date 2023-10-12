import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../../actions/orderActions';

import ReactToPrint from 'react-to-print';
import logoLVR from '../../../assets/logos/logoLVR.png';
import { formatDate, addDecimals } from '../../../maths/Functions.js';

const InvoicePrintScreen = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const componentRef = useRef();
  const [subtotal, setSubtotal] = useState(0);
  const [formatInvoiceNum, setFormatInvoiceNum] = useState('');

  // Global State --> orderDetails
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  useEffect(() => {
    if (order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, order, orderId]);

  useEffect(() => {
    if (Object.keys(order).length !== 0) {
      const subtl = order?.orderItems?.reduce(
        (acc, item) => acc + (item.price * item.qty) / (1 + 0.21),
        0
      );
      setSubtotal(addDecimals(subtl));
    }

    if (order) {
      if (order.invoiceNum) {
        const invoiceArray = order.invoiceNum.split('/');
        if (invoiceArray.length > 0) {
          const formatInvoice = invoiceArray[0] + '_' + invoiceArray[1];
          setFormatInvoiceNum(formatInvoice);
        }
      }
    }
  }, [order]);

  return (
    <section className="admin-section invoice-print">
      <Container className="p-0 m-0">
        <Row className="title">
          <Col>
            <h1>Factura: {order?.invoiceNum}</h1>
            <p>Cliente: {order?.clientItems?.name}</p>
          </Col>
        </Row>
        <Row>
          <Link className="back main-btn" to="/admin/orderlist">
            Volver
          </Link>
        </Row>
        <Row
          className="receipt d-flex flex-column mt-5 mx-5"
          ref={componentRef}
        >
          <Col className="text-center mb-4 receipt__header">
            <h1>FACTURA</h1>
            <p>MujerSinReglas 2024</p>
          </Col>
          <Col
            className="seller d-grid flex-row justify-items-center align-items-start mb-4"
            style={{}}
          >
            <img
              src={logoLVR}
              className="logo"
              style={{ width: '180px', margin: '0 auto' }}
              alt="logo de Mujer Sin Reglas"
            ></img>
            <p
              className="info-seller text-center mt-2"
              style={{ fontSize: '0.8rem' }}
            >
              NIF: G05361753
            </p>
            <p
              className="info-seller text-center"
              style={{ fontSize: '0.8rem' }}
            >
              Teléfono: 640106130
            </p>
            <p
              className="info-seller text-center"
              style={{ fontSize: '0.8rem' }}
            >
              Email: asociacionculturamenstrual@gmail.com
            </p>
            <p
              className="info-seller text-center"
              style={{ fontSize: '0.8rem' }}
            >
              Carrer de Conca, 36-40. 5è. 4a. 08041 Barcelona
            </p>
          </Col>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {order && (
            <>
              <Col
                className="register p-3 mb-3"
                style={{ backgroundColor: 'rgb(196, 196, 196)' }}
              >
                <p className="info-register" style={{ fontSize: '0.9rem' }}>
                  Nº del pedido: {order?._id}
                </p>
                <p className="info-register" style={{ fontSize: '0.9rem' }}>
                  {formatDate(order?.createdAt)}
                </p>
                <p className="info-register" style={{ fontSize: '0.9rem' }}>
                  Número de Factura: {order?.invoiceNum}
                </p>
              </Col>
              <Col className="client ps-3 mb-3">
                <p className="info-client fw-bold" style={{ fontSize: '1rem' }}>
                  Datos del cliente
                </p>
                <p className="info-client" style={{ fontSize: '1rem' }}>
                  {order.clientItems?.name}
                </p>
                <p className="info-client" style={{ fontSize: '1rem' }}>
                  {order.clientItems?.email}
                </p>
                <p className="info-client" style={{ fontSize: '1rem' }}>
                  {order.clientItems?.telephone}
                </p>
                <p className="info-client" style={{ fontSize: '1rem' }}>
                  {order.clientItems?.address}, {order.clientItems?.city} (
                  {order.clientItems?.postalCode}), {order.clientItems?.region}.
                  &nbsp;
                  {order.clientItems?.country}
                </p>
              </Col>
              <Col className="products px-3 py-4">
                <Row
                  className="products__header d-grid text-center"
                  style={{
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    backgroundColor: 'rgb(196, 196, 196)',
                    fontWeight: '700',
                    padding: '0.4rem 0',
                  }}
                >
                  <p className="">Descripción</p>
                  <p>Cantidad</p>
                  <p>Precio Unitario</p>
                  <p>Importe</p>
                </Row>
                {order.orderItems?.map((item, index) => (
                  <Row
                    className="products__body d-grid text-center"
                    style={{
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      padding: '0.4rem 0',
                      borderBottom: '1px solid rgb(196, 196, 196)',
                    }}
                    key={index}
                  >
                    <p>
                      {item.name} {item.type ?? item.type}
                    </p>
                    <p>{item.qty}</p>
                    <p>{addDecimals(item.price / (1 + 0.21))}€</p>
                    <p>{addDecimals((item.price * item.qty) / (1 + 0.21))}€</p>
                  </Row>
                ))}
                <Row
                  className="result d-grid text-center"
                  style={{
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    padding: '0.4rem 0',
                    borderBottom: '1px solid rgb(196, 196, 196)',
                  }}
                >
                  <p></p>
                  <p></p>
                  <p>Subtotal</p>
                  <p>{subtotal}€</p>
                </Row>
                <Row
                  className="result d-grid text-center"
                  style={{
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    padding: '0.4rem 0',
                    borderBottom: '1px solid rgb(196, 196, 196)',
                  }}
                >
                  <p></p>
                  <p></p>
                  <p>Envío</p>
                  <p>{addDecimals(order.shippingPrice)}€</p>
                </Row>
                <Row
                  className="result d-grid text-center"
                  style={{
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    padding: '0.4rem 0',
                    borderBottom: '1px solid rgb(196, 196, 196)',
                  }}
                >
                  <p></p>
                  <p></p>
                  <p>IVA (21%)</p>
                  <p>{addDecimals(order.itemsPrice - subtotal)}€</p>
                </Row>
                <Row
                  className="result d-grid text-center"
                  style={{
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    padding: '0.4rem 0',
                    borderBottom: '1px solid rgb(196, 196, 196)',
                    backgroundColor: 'rgb(212, 212, 212)',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                  }}
                >
                  <p></p>
                  <p></p>
                  <p>TOTAL FACTURA</p>
                  <p>{addDecimals(order.totalPrice)}€</p>
                </Row>
              </Col>
            </>
          )}
        </Row>
        <Row className="invoice-button">
          <ReactToPrint
            trigger={() => (
              <button className="main-btn">Imprimir Recibo</button>
            )}
            content={() => componentRef.current}
            documentTitle={formatInvoiceNum}
          />
        </Row>
      </Container>
    </section>
  );
};

export default InvoicePrintScreen;
