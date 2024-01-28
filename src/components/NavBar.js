import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
    const currentUser = useCurrentUser();

    const loggedInIcons = <>{currentUser?.username}</>;
    const loggedOutIcons = (
    <> 
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
    <i className="far fa-arrow-alt-circle-right"></i>
    Sign In
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
    <i className="fas fa-plus-circle"></i>
    Sign Up
        </NavLink>
    </>
    );


  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
      <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" height="125" />
        </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
            <i className="fas fa-house-user"></i>
            Home
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/about">
            <i className="far fa-question-circle"></i>
            About
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar