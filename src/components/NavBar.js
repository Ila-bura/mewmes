import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from './Avatar';
import axios from 'axios';

const NavBar = () => {
    const currentUser = useCurrentUser();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        }
    };


    const newPostIcon = (
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/posts/create"
        >
          <i className="far fa-plus-square"></i>Add meme
        </NavLink>
      );

    const loggedInIcons = <>
     <NavLink
            to="/feed"
            activeClassName={styles.Active}
            className={styles.NavLink}>
            <i className="fas fa-list"></i>
            Feed

        </NavLink>
        <NavLink
            to="/saved"
            className={styles.NavLink}
            activeClassName={styles.Active}>
            <i className="fa-bookmark"></i>
            Saved

        </NavLink>
        <NavLink className={styles.NavLink}
            to="/"
            onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i>
            Log out
        </NavLink>

        <NavLink
            to={`/profiles/${currentUser?.profile_id}`}
            className={`${styles.NavLink}`}>
            <Avatar text={currentUser?.username} src={currentUser?.profile_image} height={40} alt="avatar"/>
        </NavLink>

   </>;
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

        <NavLink
            to={`/profiles/${currentUser?.profile_id}`}>
            <Avatar text={currentUser?.username} src={currentUser?.profile_image} height={40} alt="avatar"/>
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
            {currentUser && newPostIcon}

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar