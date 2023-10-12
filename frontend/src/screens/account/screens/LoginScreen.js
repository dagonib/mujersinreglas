import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Acciones
import { login } from '../../../actions/userActions';

// Bootstrap Components
import Form from 'react-bootstrap/Form';

// Assets: images
import bgImage from '../../../assets/images/img_about.jpg';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Variables Formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Datos Globales --> Store
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // Redireccionamiento
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/admin/dashboard';

  // Redirigir si logueado
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <section className="login account" id="login">
      {/** Contenedor Formulario */}
      <div className="account__content">
        <p className="account__subtitle">Inicia sesión en tu cuenta</p>

        {/** Formulario */}
        <Form className="form" onSubmit={submitHandler}>
          {/** Input 1 */}
          <Form.Group className="form__group" controlId="email">
            <Form.Label className="form__label">Email</Form.Label>
            <Form.Control
              className="form__input"
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/** Input 2 */}
          <Form.Group className="form__group" controlId="password">
            <Form.Label className="form__label">Contraseña</Form.Label>
            <Form.Control
              className="form__input"
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {/** Button */}
          <button className="button" type="submit">
            Iniciar Sesión
          </button>
        </Form>

        {/** Links */}
        <p>
          Volver a la página de inicio <Link to={'/'}>Inicio</Link>
        </p>
      </div>

      {/** Contenedor Imagen */}
      <div className="account__image-box">
        <img
          className="account__image"
          src={bgImage}
          alt="Imagen de fondo del login"
        />
      </div>
    </section>
  );
};

export default LoginScreen;
