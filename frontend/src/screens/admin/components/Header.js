import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// Actions
import { logout } from '../../../actions/userActions';

// Bootstrap Components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Obtención Usuario
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Función Logout
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="admin-header">
      <Navbar>
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand className="admin-header__login">MSR2023</Navbar.Brand>
          </LinkContainer>

          <Nav>
            <LinkContainer to="userList">
              <Nav.Link className="admin-header__link">Dashboard</Nav.Link>
            </LinkContainer>

            {/* Admin Menu */}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown
                className="admin-header__dropdown"
                title="Admin"
                id="adminmenu"
              >
                <LinkContainer to="userlist">
                  <NavDropdown.Item className="admin-header__dropdown-item">
                    Usuarios
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="productlist">
                  <NavDropdown.Item className="admin-header__dropdown-item">
                    Productos
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="orderlist">
                  <NavDropdown.Item className="admin-header__dropdown-item">
                    Órdenes
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="ordernotpaidlist">
                  <NavDropdown.Item className="admin-header__dropdown-item">
                    Órdenes No Pagadas
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="eventlist">
                  <NavDropdown.Item className="admin-header__dropdown-item">
                    Eventos
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}

            {/* User Info Information */}
            {userInfo ? (
              <NavDropdown
                className="admin-header__dropdown"
                title={userInfo.name}
              >
                <LinkContainer to="profile">
                  <NavDropdown.Item className="admin-header__dropdown-item">
                    Profile
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavDropdown.Item className="admin-header__dropdown-item">
                    Settings
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item
                  onClick={logoutHandler}
                  className="admin-header__dropdown-item"
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <></>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
