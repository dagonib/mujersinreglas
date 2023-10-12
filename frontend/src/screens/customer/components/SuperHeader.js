import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SuperHeader = () => {
  return (
    <div className="super-header">
      <Navbar bg="light" variant="light" className="upper-navbar">
        <Container className="justify-content-end" fluid="lg">
          <LinkContainer to="/account/login">
            <Nav.Link className="text-link-alt--small">Login</Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </div>
  );
};

export default SuperHeader;
