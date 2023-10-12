import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Actions
import { getUserDetails, updateUser } from '../../../actions/userActions';
import { USER_UPDATE_RESET } from '../../../constants/userConstants';

const UserEditScreen = () => {
  const { userId } = useParams();

  // Datos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Global State => userDetails
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  // Global State => userUpdate
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  // USE EFFECT
  useEffect(() => {
    // Si se ha actualizado: reset y redirect
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate('/admin/userList');
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [user, userId, successUpdate, dispatch, navigate]);

  // Function Update
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  return (
    <section className="user-update admin-section">
      <Container>
        <Link to="/admin/userList" className="btn btn-light my-3">
          Volver
        </Link>

        <h1>Actualizar usuario</h1>
        <div>
          {/* Actualización del usuario */}
          {loadingUpdate && <p>Loading...</p>}
          {errorUpdate && <p>{errorUpdate}</p>}

          {/* Cargar los datos del usuario */}
          {loading ? (
            <p>loading...</p>
          ) : (
            <Form onSubmit={submitHandler}>
              {/* Nombre */}
              <Form.Group controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Modifica el nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Modifica el email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Is Admin */}
              <Form.Group controlId="isadmin">
                <Form.Check
                  type="checkbox"
                  label="Is Admin"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin((prev) => !prev)}
                ></Form.Check>
              </Form.Group>

              {/* Boton */}
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

export default UserEditScreen;
