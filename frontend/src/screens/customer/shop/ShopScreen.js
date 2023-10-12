import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { listProducts } from '../../../actions/productActions';

// Components
import Product from '../../../components/Product';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShopScreen = () => {
  const dispatch = useDispatch();

  const [uniqueProducts, setUniqueProducts] = useState([]);

  // Datos Store --> products
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    const uniqueProducts = products.filter(
      (product, index, self) =>
        index === self.findIndex((p) => p.name === product.name)
    );
    setUniqueProducts(uniqueProducts);
  }, [products]);

  return (
    <section className="shop">
      <Container fluid="lg">
        <Row>
          <h1 className="title title-md-section">Tienda</h1>
        </Row>
        <Row className="shop__list">
          {uniqueProducts.map((product) => (
            <Col key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ShopScreen;
