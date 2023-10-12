import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getOrderDetails } from '../../../actions/orderActions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-modal';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { addDecimals, formatDate } from '../../../maths/Functions';

import logoMSR from '../../../assets/logoMSR/logo-reducido.png';

const OrderScreen = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  // Global State --> orderDetails
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  useEffect(() => {
    if (!order.totalPrice || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, order, orderId]);

  return (
    <section className=".order-details admin-section">
      <Container className=" p-0 m-0">
        <Row className="title">
          <Col>
            <h1>Factura: {order?.invoiceNum}</h1>
            <p>Cliente: {order?.clientItems?.name}</p>
          </Col>
        </Row>
        <Link className="back main-btn" to="/admin/orderlist">
          Volver
        </Link>
        <p className="px-3">Nº de orden: {order._id}</p>
        {loading ? (
          <p>Loading...</p>
        ) : order.clientItems ? (
          <Row className="order-details__data">
            <Col className="order-details__client">
              <p className="fw-bold">Datos del cliente</p>
              <p>Nombre: {order.clientItems.name}</p>
              <p>Dirección: {order.clientItems.address}</p>
              <p>Email: {order.clientItems.email}</p>
              <p>Teléfono: {order.clientItems.telephone}</p>
              <p>Ciudad: {order.clientItems.city}</p>
              <p>País: {order.clientItems.country}</p>
              <p>CP: {order.clientItems.postalCode}</p>
              <p>Provincia: {order.clientItems.region}</p>
            </Col>

            <Col className="order-details__order">
              <p className="fw-bold">Datos del pedido</p>
              {order.isPaid ? (
                <p>Pagado: {formatDate(order.paidAt)}</p>
              ) : (
                <p>No se ha pagado</p>
              )}
              {order.isDelivered ? (
                <p>Enviado: {formatDate(order.deliveredAt)}</p>
              ) : (
                <p>No se ha enviado</p>
              )}
              {order.isRecieved ? (
                <p>Recibido: {formatDate(order.recievedAt)}</p>
              ) : (
                <p>No se ha Recibido</p>
              )}
              <p>Método de Pago: {order.methodPaid}</p>
              <p>Envío: {order.shippingPrice}€</p>
              <p>Precio Total: {order.totalPrice}€</p>
            </Col>

            <Col className="order-details__products">
              <p className="fw-bold">Productos</p>
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
                  <p>{addDecimals(item.price)}€</p>
                  <p>{addDecimals(item.price * item.qty)}€</p>
                </Row>
              ))}
            </Col>
          </Row>
        ) : (
          <p>No hay información de la compra</p>
        )}
      </Container>
    </section>
  );
};

export default OrderScreen;
