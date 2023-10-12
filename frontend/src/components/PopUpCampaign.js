import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Modal from 'react-modal';

import PopupImg from '../assets/images/popup.png';
import AgendaImg from '../assets/images/agenda/portada.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const PopUpCampaign = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="popupcampaign"
    >
      <Col className="popupcampaign__imgbox">
        <img className="image" src={PopupImg} />
      </Col>
      <Col className="popupcampaign__infobox">
        <a onClick={closeModal}>
          <i className="bi bi-x-circle-fill"></i>
        </a>
        <h1>Promoción</h1>
        <h2>Regalo</h2>
        <h3>del 01 al 15 de</h3>
        <h4>octubre</h4>
        <div className="popupcampaign__infobox-agendainfo">
          <p>
            Con la compra de tu agenda Mujer Sin Reglas 2024, una preciosa tote
            bag de regalo.
          </p>
          <img className="image" src={AgendaImg} />
        </div>
        <p className="popupcampaign__infobox-totebag">
          tote bag &nbsp;<span>MujerSinReglas</span>
        </p>
      </Col>
    </Modal>
  );
};

export default PopUpCampaign;
