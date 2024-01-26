import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="125" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
            <i class="fas fa-house-user"></i>
            Home
            </Nav.Link>
            <Nav.Link>
            <i class="far fa-question-circle"></i>
            About
            </Nav.Link>
            <Nav.Link>
            <i class="far fa-arrow-alt-circle-right"></i>
            Sign In
            </Nav.Link>
            <Nav.Link>
            <i class="fas fa-plus-circle"></i>
            Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar