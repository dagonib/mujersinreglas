import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Icon from '../../../components/Icon';

// Assets
import logoMSR from '../../../assets/logoMSR/logoMSR.png';

const Header = () => {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="sm" className="navbar">
        <Container fluid="lg">
          <LinkContainer to="/">
            <Navbar.Brand className="navbar__brand">
              <img
                src={logoMSR}
                className="logo"
                alt="logo de Mujer Sin Reglas"
              ></img>
            </Navbar.Brand>
          </LinkContainer>
          {/** Toggle */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar__toogle"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navbar__list">
              <LinkContainer to="/" className="navbar__item">
                <Nav.Link className="text-link-alt">Bienvenida</Nav.Link>
              </LinkContainer>
              <LinkContainer to="educacion" className="navbar__item">
                <Nav.Link className="text-link-alt">Educación</Nav.Link>
              </LinkContainer>
              <LinkContainer to="agenda" className="navbar__item">
                <Nav.Link className="text-link-alt">Agenda</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="tienda" className="navbar__item">
                <Nav.Link className="text-link-alt">Tienda</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="contacta" className="navbar__item">
                <Nav.Link className="text-link-alt">Contacta</Nav.Link>
              </LinkContainer>
              <LinkContainer to="cart" className="navbar__item">
                <Nav.Link className="text-link-alt">
                  <Icon icon="bi bi-cart" color="#464646" />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
