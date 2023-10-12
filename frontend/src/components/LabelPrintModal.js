import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-modal';

import logoMSR from '../assets/logoMSR/logo-reducido.png';
import ReactToPrint, { useReactToPrint } from 'react-to-print';

Modal.setAppElement('#root');

const LabelPrintModal = ({ order, isOpen, closeModal }) => {
  const componentRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle={order.clientItems.name}
  // });

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <a onClick={closeModal}>
        <i className="bi bi-x-circle-fill"></i>
      </a>
      <Row ref={componentRef} className="order-label mt-3 mx-3">
        <Row
          className="sender d-grid"
          style={{
            backgroundColor: 'rgb(96, 96, 96)',
            gridTemplateColumns: '0.2fr 1fr',
            columnGap: '2rem',
            alignItems: 'center',
            padding: '1rem',
            marginBottom: '1rem',
          }}
        >
          <img
            src={logoMSR}
            className="image"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '50%',
            }}
            alt="logo de MujerSinReglas"
          />
          <Col
            className="sender__info"
            style={{ color: '#ffffff', fontSize: '1.7rem' }}
          >
            <h3 style={{ fontWeight: '800' }}>REMITENTE:</h3>
            <p style={{ fontWeight: '700' }}>CAROLINA ACKERMANN BARREIRO</p>
            <p style={{ fontWeight: '700' }}>CALLE LLEVAT, 2B, 6-3</p>
            <p style={{ fontWeight: '700' }}>VILADECANS (08840) BARCELONA</p>
          </Col>
        </Row>
        <Row className="recipient">
          <h3
            style={{
              backgroundColor: 'rgb(96, 96, 96)',
              color: '#FFFFFF',
              padding: '0 1rem',
            }}
          >
            ENVÍO A:
          </h3>
          <Col
            className="recipient__info d-grid"
            style={{
              marginTop: '1rem',
              fontSize: '2rem',
              padding: '0 1rem',
            }}
          >
            <p>Nombre: {order.clientItems.name}</p>
            <p>Dirección: {order.clientItems.address}</p>
            <p>
              Municipio: {order.clientItems.city} (
              {order.clientItems.postalCode})
            </p>
            <p>Provincia: {order.clientItems.region}</p>
            <p>País: {order.clientItems.country}</p>
            {order.clientItems.dni && <p>País: {order.clientItems.dni}</p>}
          </Col>
        </Row>
      </Row>
      <ReactToPrint
        trigger={() => (
          <button className="main-btn mt-3">Imprimir Etiqueta</button>
        )}
        content={() => componentRef.current}
        documentTitle={`${Number(order.invoiceNum.split('/')[1])}-${
          order.clientItems.name
        }`}
      />
    </Modal>
  );
};

export default LabelPrintModal;
