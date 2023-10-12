import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Components
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import Button from 'react-bootstrap/Button';

import { addDecimals } from '../maths/Functions';

const Product = ({ product }) => {
  return (
    <Card className="product">
      <Link to={`/shop/${product._id}`}>
        <Card.Img
          className="product__image"
          src={product.image}
          variant="top"
        />
      </Link>
      <Card.Body>
        <a href={`/shop/${product._id}`}>
          <Card.Title as="div" className="product__name subtitle">
            {product.name}
          </Card.Title>
        </a>
        <Card.Text as="h3" className="product__price">
          {addDecimals(product.price)} €
        </Card.Text>
        <Card.Text as="p">
          <p>IVA incluido</p>
        </Card.Text>
        <Button
          href={`/shop/${product._id}`}
          className="main-action-button"
          type="button"
          disabled={product.countInStock === 0}
        >
          Añadir al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
