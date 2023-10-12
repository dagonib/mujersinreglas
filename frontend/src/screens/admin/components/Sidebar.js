import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Actions
import { logout } from '../../../actions/userActions';
import Row from 'react-bootstrap/Row';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Global State Usuario
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Función Logout
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="admin-sidebar">
      <LinkContainer to="/">
        <Navbar.Brand className="admin-header__login">MSR2023</Navbar.Brand>
      </LinkContainer>

      <Row className="user">{userInfo ? <p>{userInfo.name}</p> : <></>}</Row>

      <Nav className="nav">
        {/* Admin Menu */}
        {userInfo && userInfo.isAdmin && (
          <>
            <LinkContainer to="dashboard">
              <Nav.Link className="admin-header__dropdown-item">
                <i className="icon bi bi-people-fill"></i>Dashboard
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="userlist">
              <Nav.Link className="admin-header__dropdown-item">
                <i className="icon bi bi-people-fill"></i>Usuarios
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="productlist">
              <Nav.Link className="admin-header__dropdown-item">
                <i className="icon bi bi-cart-dash-fill"></i>Productos
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="orderlist">
              <Nav.Link className="admin-header__dropdown-item">
                <i className="icon bi bi-credit-card-fill"></i>Órdenes
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="ordernotpaidlist">
              <Nav.Link className="admin-header__dropdown-item">
                <i className="icon bi bi-credit-card-fill"></i>Órdenes No
                Pagadas
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="eventlist">
              <Nav.Link className="admin-header__dropdown-item">
                <i className="icon bi bi-calendar2-event-fill"></i>Eventos
              </Nav.Link>
            </LinkContainer>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;
