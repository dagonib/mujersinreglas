import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Assets
import BackImage from '../assets/images/education/back-image-screen.png';
import Button from 'react-bootstrap/Button';

const Proposal = ({
  _id,
  name,
  description,
  audience,
  duration,
  period,
  image,
  formUrl,
}) => {
  return (
    <Row className="proposal">
      <Col className="proposal__name">
        <h1 className="proposal__name section-title">{name}</h1>
      </Col>
      <Col className="proposal__image">
        <img
          src={BackImage}
          alt="Imagen la menopausia es evolución"
          className="image back"
        />
        <img
          src={image}
          alt="Imagen la menopausia es evolución"
          className="image front"
        />
      </Col>
      <Col className="proposal__data">
        <div>
          <i className="bi bi-people-fill"></i>
          <p className="proposal__data-item">Público</p>
          <p className="proposal__data-value">{audience}</p>
        </div>
        <div>
          <i className="bi bi-clock"></i>
          <p className="proposal__data-item">Duración</p>
          <p className="proposal__data-value">{duration}</p>
        </div>
        <div>
          <i className="bi bi-calendar-range"></i>
          <p className="proposal__data-item">Periodo</p>
          <p className="proposal__data-value">{period}</p>
        </div>
      </Col>
      <Col className="proposal__description">
        <p className="text-paragraph">{description}</p>
        <Button href={formUrl} className="main-btn mt-3" target="_blank">
          Solicitud
        </Button>
      </Col>
    </Row>
  );
};

export default Proposal;
