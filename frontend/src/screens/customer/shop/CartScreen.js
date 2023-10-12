import React, { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { addToCart, removeFromCart } from '../../../actions/cartActions';

import { addDecimals } from '../../../maths/Functions';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Icon from '../../../components/Icon';

const CartScreen = () => {
  // Constants Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Constante URL
  const { productId } = useParams();

  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  // Global State => CartITems
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // Ejecutar acción: añadir producto al cart
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  // Eliminar un item del carrito.
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // Proceder a pagar
  const checkoutHandler = () => {
    navigate('/shipping');
  };

  const subtotal = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <section className="cart section" id="initial">
      <Container fluid="lg">
        <Row>
          <h1 className="title title-md-section">Carrito</h1>
        </Row>
        <Row className="contentCart">
          {cartItems.length === 0 ? (
            <Col>
              <p className="emptycart paragraph">Tu carrito está vacío.</p>
              <Link to="/agenda" className="main-btn">
                Volver
              </Link>
            </Col>
          ) : (
            <Row className="cartbox">
              <ListGroup variant="flush" className="cartItems">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product} className="cartItem">
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                      className="main-btn"
                    >
                      <Icon icon="bi bi-trash" />
                    </Button>
                    <Image src={item.image} alt={item.name} />
                    <Row>
                      <p className="paragraph text-center name">{item.name}</p>
                      {item.type && (
                        <p className="paragraph text-center type">
                          {item.type}
                        </p>
                      )}
                    </Row>
                    {item?.product === '64fd82be9f66dc22fff75e9e' ? (
                      <Col className="btnCounter">
                        <h6 className="number py-2">{item.qty}</h6>
                      </Col>
                    ) : (
                      <Col className="btnCounter">
                        <Button
                          onClick={(e) => {
                            if (item.qty <= 1) {
                              dispatch(addToCart(item.product, 1));
                              dispatch(
                                addToCart('64fd82be9f66dc22fff75e9e', 1)
                              );
                            } else {
                              dispatch(addToCart(item.product, item.qty - 1));
                              dispatch(
                                addToCart(
                                  '64fd82be9f66dc22fff75e9e',
                                  item.qty - 1
                                )
                              );
                            }
                          }}
                          className="main-btn"
                        >
                          -
                        </Button>
                        <h6 className="number">{item.qty}</h6>
                        <Button
                          onClick={() => {
                            if (item.qty > 6) {
                              dispatch(addToCart(item.product, 7));
                              dispatch(
                                addToCart('64fd82be9f66dc22fff75e9e', 7)
                              );
                            } else {
                              dispatch(addToCart(item.product, item.qty + 1));
                              dispatch(
                                addToCart(
                                  '64fd82be9f66dc22fff75e9e',
                                  item.qty + 1
                                )
                              );
                            }
                          }}
                          className="main-btn"
                        >
                          +
                        </Button>
                      </Col>
                    )}

                    <p className="paragraph subtotal">
                      {addDecimals(item.qty * item.price)}€
                    </p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Col className="totalcart">
                <h3 className="totalcart__title paragraph">Subtotal</h3>
                <p className="totalcart__subtotal paragraph">
                  {addDecimals(subtotal)} €
                </p>
              </Col>
              <Button
                type="button"
                className="main-btn"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Finalizar compra
              </Button>
            </Row>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default CartScreen;
