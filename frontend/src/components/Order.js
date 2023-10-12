import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

import { deliverOrder } from '../actions/orderActions';
import { formatDate, addDecimals } from '../maths/Functions.js';
import LabelPrintModal from './LabelPrintModal';

const Order = ({ order }) => {
  const dispatch = useDispatch();
  const componentRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Global state --> orderDeliver
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const deliverHandler = (order) => {
    if (window.confirm('¿Estás segura?')) {
      dispatch(deliverOrder(order));
      window.location.reload();
    }
  };

  const openLabelModal = () => {
    setIsModalOpen(true);
  };

  const closeLabelModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Col className="order">
      <div className="left">
        <div className="admin-info">
          <p className="name">
            {order.clientItems.name} - {order.invoiceNum}
          </p>
          <p className="id">
            <i className="bi bi-person-vcard-fill pe-1"></i>
            {order._id}
          </p>
          {order.clientItems.comentarie && (
            <p className="method">
              <i className="bi bi-chat-dots-fill pe-1"></i>
              {order.clientItems.comentarie}
            </p>
          )}
          <p className="total">Total: {addDecimals(order.totalPrice)}€</p>
        </div>
      </div>
      <div className="center">
        <p className="admin-date">
          <i className="bi bi-credit-card-2-back-fill pe-1"></i>{' '}
          {order.isPaid ? formatDate(order.paidAt) : 'No'}
        </p>
        <p className="admin-date">
          <i className="bi bi-truck pe-1"></i>{' '}
          {order.isDelivered ? formatDate(order.deliveredAt) : 'No'}
        </p>
        <p className="admin-date">
          <i className="bi bi-house-up-fill pe-1"></i>No
        </p>
      </div>
      <div className="right">
        {loadingDeliver && <p>Loading...</p>}
        <Row className="watch">
          <LinkContainer to={`/admin/order/${order._id}`}>
            <Button size="sm">
              <i className="bi bi-eye-fill"></i>
            </Button>
          </LinkContainer>
          <Button size="sm" onClick={openLabelModal}>
            <i className="bi bi-postcard"></i>
          </Button>
          <LinkContainer to={`/admin/invoice/${order._id}`}>
            <Button size="sm">Factura</Button>
          </LinkContainer>
        </Row>
        <Button
          size="sm"
          onClick={() => deliverHandler(order)}
          disabled={order.isDelivered}
        >
          Enviado
        </Button>
        <Button size="sm">Recibido</Button>
      </div>
      {isModalOpen && (
        <LabelPrintModal
          order={order}
          isOpen={isModalOpen}
          closeModal={closeLabelModal}
        />
      )}
    </Col>
  );
};

export default Order;
