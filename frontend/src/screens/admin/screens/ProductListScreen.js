import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// Actions
import {
  createProduct,
  deleteProduct,
  listProducts,
} from '../../../actions/productActions';

// Components
import Icon from '../../../components/Icon';

// Bootstrap Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { PRODUCT_CREATE_RESET } from '../../../constants/productConstants';

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sortedProducts, setSortedProducts] = useState([]);

  // Global State --> productList
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Global State --> userLogin
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Global State --> productCreate
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  // Global State --> productDelete
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      navigate('/account/login');
    }

    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts());
    }
  }, [
    userInfo,
    dispatch,
    navigate,
    successDelete,
    successCreate,
    createdProduct,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('¿Estás segura?')) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  useEffect(() => {
    const sortlist = [...products].sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    setSortedProducts(sortlist);
  }, [products]);

  return (
    <section className="admin-section">
      <Container className="p-0 m-0">
        <Row className="title">
          <Col>
            <h1>Productos</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <Button onClick={createProductHandler} className="btn-create">
              <Icon icon="bi bi-plus-circle-fill" /> Crear producto
            </Button>
          </Col>
        </Row>

        {/* Create Management */}
        {loadingCreate && <p>Loading...</p>}
        {errorCreate && <p>{errorCreate}</p>}

        {/* Delete Management */}
        {loadingDelete && <p>Loading...</p>}
        {errorDelete && <p>{errorDelete}</p>}

        {/* List Product Management */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product) => (
                <tr key={product._id}>
                  <td>
                    <div>{product._id}</div>
                  </td>
                  <td>
                    <div>{product.name}</div>
                  </td>
                  <td>
                    <div>{product.type}</div>
                  </td>
                  <td>
                    <div>{product.price}€</div>
                  </td>
                  <td>
                    <div>{product.countInStock}</div>
                  </td>
                  <td>
                    <div>
                      <LinkContainer to={`/admin/product/${product._id}/edit`}>
                        <Button>
                          <Icon icon="bi bi-pencil-square" />
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <Icon icon="bi bi-trash-fill" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </section>
  );
};

export default ProductListScreen;
