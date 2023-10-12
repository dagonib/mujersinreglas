import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Actions
import { getProductDetails } from '../../../actions/productActions';
import { listProducts } from '../../../actions/productActions';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { addDecimals } from '../../../maths/Functions';

const ProductScreen = () => {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local State
  const [qty, setQty] = useState(1);
  const [type, setType] = useState('');
  const [id, setId] = useState(productId);

  // Global State --> Product Details
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // Datos Store --> products
  const productList = useSelector((state) => state.productList);
  const { loadingProducts, errorProducts, products } = productList;

  useEffect(() => {
    // Acción --> product Details
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    products.map((product) => {
      if (product.type === type) {
        setId(product._id);
      }
      return null;
    });
  }, [products, dispatch, type]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  // Función Change Type
  const handleSelectChange = (e) => {
    setType(e.target.value);
    dispatch(listProducts());
  };

  return (
    <section className="details-product section">
      <Container fluid="lg">
        <Row className="px-3 mb-5">
          <Link className="main-action-button comeback-btn" to="/shop">
            Volver
          </Link>
        </Row>
        <Row className="details-box">
          <Image
            className="details-box__image"
            src={product.image}
            alt={product.name}
            fluid
          />

          <Col className="details-box__info">
            <h2 className="details-box__name">{product.name}</h2>
            <div className="details-box__price ">
              <p>{addDecimals(product.price)} €</p>
              <span>(IVA 21% y gastos de envío incluídos*)</span>
            </div>
            <p className="details-box__description paragraph">
              {product.description}
            </p>

            {product.type && (
              <>
                <p className="details-box__size">Tamaño: {product.type}</p>
                <Col className="details-box__type">
                  {product.type === 'small' && (
                    <Form.Select onChange={handleSelectChange}>
                      <option>Selecciona otra medida</option>
                      <option value="medium">medium</option>
                    </Form.Select>
                  )}
                  {product.type === 'medium' && (
                    <Form.Select onChange={handleSelectChange}>
                      <option>Selecciona otra medida</option>
                      <option value="small">small</option>
                    </Form.Select>
                  )}
                  {product.type === 'talla S' && (
                    <Form.Select onChange={handleSelectChange}>
                      <option>Selecciona otra medida</option>
                      <option value="talla M">Talla M</option>
                      <option value="talla L">Talla L</option>
                    </Form.Select>
                  )}
                  {product.type === 'talla M' && (
                    <Form.Select onChange={handleSelectChange}>
                      <option>Selecciona otra medida</option>
                      <option value="talla S">Talla S</option>
                      <option value="talla L">Talla L</option>
                    </Form.Select>
                  )}
                  {product.type === 'talla L' && (
                    <Form.Select onChange={handleSelectChange}>
                      <option>Selecciona otra medida</option>
                      <option value="talla S">Talla S</option>
                      <option value="talla M">Talla M</option>
                    </Form.Select>
                  )}
                </Col>
              </>
            )}

            <Row className="sellbox">
              <Col className="btnCounter">
                <Button
                  onClick={() => {
                    if (qty <= 1) {
                      setQty(1);
                    } else {
                      setQty(qty - 1);
                    }
                  }}
                  className="main-action-button"
                >
                  -
                </Button>
                <h6 className="number">{qty}</h6>
                <Button
                  onClick={() => {
                    if (qty > 2) {
                      setQty(3);
                    } else {
                      setQty(qty + 1);
                    }
                  }}
                  className="main-action-button"
                >
                  +
                </Button>
              </Col>

              <Button
                onClick={addToCartHandler}
                className="main-action-button ms-2"
                type="button"
                disabled={product.countInStock === 0}
              >
                Añadir al Carrito
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductScreen;
