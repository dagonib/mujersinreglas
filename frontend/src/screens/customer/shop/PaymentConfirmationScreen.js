import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getOrderDetails,
  invoiceOrder,
  payOrder,
} from '../../../actions/orderActions.js';
import ReactToPrint from 'react-to-print';

import { formatDate, addDecimals } from '../../../maths/Functions.js';

import logoMSR from '../../../assets/logoMSR/logoMSR.svg';
import logoLVR from '../../../assets/logos/logoLVR.png';

import {
  createInvoice,
  listInvoices,
} from '../../../actions/invoiceActions.js';

const PaymentConfirmationScreen = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const componentRef = useRef();
  const [subtotal, setSubtotal] = useState(0);

  const invoiceCreated = localStorage.getItem('invoiceCreated') === 'true';
  const [isInvoiceCreated, setInvoiceCreated] = useState(invoiceCreated);

  // Global State --> orderDetails
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  // Global state --> invoiceList
  const invoiceList = useSelector((state) => state.invoiceList);
  const {
    loading: invoiceListLoading,
    error: invoiceListError,
    invoices,
  } = invoiceList;

  useEffect(() => {
    if (Object.keys(order).length === 0) {
      dispatch(getOrderDetails(orderId));
    }

    dispatch(payOrder(orderId));
  }, [dispatch, orderId, order]);

  useEffect(() => {
    dispatch(listInvoices());
  }, [dispatch]);

  useEffect(() => {
    if (invoices && invoices.length > 0) {
      const invoiceNum = invoices[invoices.length - 1].number;
      console.log(invoiceNum);
      dispatch(invoiceOrder(invoiceNum, orderId));
    }
  }, [invoices, dispatch]);

  useEffect(() => {
    if (Object.keys(order).length !== 0) {
      const subtl = order?.orderItems?.reduce(
        (acc, item) => acc + (item.price * item.qty) / (1 + 0.21),
        0
      );
      setSubtotal(addDecimals(subtl));
    }
  }, [order, dispatch, orderId]);

  return (
    <section className="confirmation">
      <Container fluid="lg">
        <Row className="confirmation__row">
          <p className="text-dark text-center m-0 p-0">
            El pago ha sido realizado correctamente.
          </p>
          <p className="text-dark text-center m-0 p-0">
            A continuación puedes ver la factura simplificada e imprimirla si lo
            deseas.
          </p>
        </Row>
        {invoices && (
          <Row
            className="receipt d-md-flex flex-column mt-5 mx-5"
            ref={componentRef}
          >
            <Col className="text-center mb-4 receipt__header">
              <h1>FACTURA</h1>
              <p>MujerSinReglas 2024</p>
            </Col>
            <Col
              className="seller d-grid flex-row justify-items-center justify-content-center align-items-start mb-4"
              style={{}}
            >
              <img
                src={logoLVR}
                className="logo"
                style={{ width: '180px', margin: '0 auto' }}
                alt="logo de La Vida en Rojo"
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
                  style={{ backgroundColor: '#cdcdcd' }}
                >
                  <p className="info-register" style={{ fontSize: '0.9rem' }}>
                    Nº del pedido: {order?._id}
                  </p>
                  <p className="info-register" style={{ fontSize: '0.9rem' }}>
                    Fecha: {formatDate(order?.createdAt)}
                  </p>
                  {invoices && invoices.length > 0 && (
                    <p className="info-register" style={{ fontSize: '0.9rem' }}>
                      Nº de Factura: {invoices[invoices.length - 1].number}
                    </p>
                  )}
                </Col>
                <Col className="client ps-3 mb-3">
                  <p
                    className="info-client fw-bold"
                    style={{ fontSize: '1rem' }}
                  >
                    Datos del cliente
                  </p>
                  <p className="info-client" style={{ fontSize: '1rem' }}>
                    {order.clientItems?.name}
                  </p>
                  <p className="info-client" style={{ fontSize: '1rem' }}>
                    {order.clientItems?.dni}
                  </p>
                  <p className="info-client" style={{ fontSize: '1rem' }}>
                    {order.clientItems?.email}
                  </p>
                  <p className="info-client" style={{ fontSize: '1rem' }}>
                    {order.clientItems?.telephone}
                  </p>
                  <p className="info-client" style={{ fontSize: '1rem' }}>
                    {order.clientItems?.address}, {order.clientItems?.city} (
                    {order.clientItems?.postalCode}),{' '}
                    {order.clientItems?.region}. &nbsp;
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
                      <p>
                        {addDecimals((item.price * item.qty) / (1 + 0.21))}€
                      </p>
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
                    {order.clientItems?.region === 'Ceuta' ||
                    order.clientItems?.region === 'Melilla' ||
                    order.clientItems?.region === 'Las Palmas' ||
                    order.clientItems?.region === 'Santa Cruz de Tenerife' ? (
                      <p>IVA (sin IVA)</p>
                    ) : (
                      <p>IVA (21%)</p>
                    )}
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
        )}
        <Row className="receipt-button">
          <ReactToPrint
            trigger={() => (
              <button className="main-btn">Imprimir Recibo</button>
            )}
            content={() => componentRef.current}
            documentTitle="recibo"
          />
        </Row>
      </Container>
    </section>
  );
};

export default PaymentConfirmationScreen;
