import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo/dental_square.png'

const Menu = () => {

  const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
  </Navbar.Brand>
  <Navbar.Brand as={Link} to="/home">Dental Square</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      
    </Nav>
    <Nav>
      {user?.email?
       <Nav.Link onClick={logOut} as={Link} to="/login" className='me-5'>Logout</Nav.Link>:
      <Nav.Link as={Link} to="/login">Login</Nav.Link>}
    </Nav>
      <Navbar.Text>
        Signed in as: {user?.displayName}
      </Navbar.Text>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Menu;