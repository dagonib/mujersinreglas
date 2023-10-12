import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// Actions
import {
  getProductDetails,
  updateProduct,
} from '../../../actions/productActions';

// Constants
import { PRODUCT_UPDATE_RESET } from '../../../constants/productConstants';

const ProductEditScreen = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Constants Form
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [uploading, setUploading] = useState(false);

  // Global State --> productDetails
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // Global State --> productUpdate
  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate('/admin/productList');
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(getProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setCountInStock(product.countInStock);
        setDescription(product.description);
        setType(product.type);
      }
    }
  }, [dispatch, navigate, productId, product, successUpdate]);

  // Subir Imagen
  const uploadingFilHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form',
        },
      };
      const { data } = await axios.post('/api/upload', formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  // Función Actualizar Producto
  const submitUpdateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        countInStock,
        description,
        type,
      })
    );
  };

  return (
    <section className="product-update admin-section mt-5">
      <Container fluid>
        <Link to="/admin/productList">Volver</Link>

        <h1>Actualizar producto</h1>
        <div>
          {/* Actualización del producto */}
          {loadingUpdate && <p>Loading...</p>}
          {errorUpdate && <p>{errorUpdate}</p>}
          {/* Cargar los datos del producto */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Form onSubmit={submitUpdateHandler}>
              {/* Nombre */}
              <Form.Group controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Introduce el nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Precio */}
              <Form.Group controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Introduce el precio"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Imagen */}
              <Form.Group controlId="image">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce la imagen"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></Form.Control>
                <Form.Control
                  type="file"
                  id="image-file"
                  label="Choose File"
                  custom
                  onChange={uploadingFilHandler}
                ></Form.Control>
                {uploading && <p>Loading...</p>}
              </Form.Group>

              {/* CountInStock */}
              <Form.Group controlId="countInStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Introduce el stock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Description */}
              <Form.Group controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce la descripción"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Type */}
              <Form.Group controlId="type">
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce el tipo"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Button */}
              <Button type="submit" variant="primary">
                Actualizar
              </Button>
            </Form>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProductEditScreen;
