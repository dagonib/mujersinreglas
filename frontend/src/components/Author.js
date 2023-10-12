import React from 'react';
import Row from 'react-bootstrap/Row';

const Author = ({ name, image }) => {
  return (
    <Row className="author">
      <img
        src={image}
        alt="Imagen la menopausia es evolución"
        className="image"
      />
      <p className="paragraph">{name}</p>
    </Row>
  );
};

export default Author;
