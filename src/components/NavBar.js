import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from '../utils/utils';
import {NotificationManager} from 'react-notifications';


const NavBar = () => {
    // Access current user and setCurrentUser functions from context
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    // Custom hook to handle click outside toggle
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    // Function to handle sign out
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
             // Display success notification
            NotificationManager.success("Logged out successfully!", "Bye for now!", 2000);
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            //console.log(err);
            // Display error notification
            NotificationManager.error('Please try again', 'Something went wrong!', 2000)
        }
    };


    // Icons for adding a new meme
    const newPostIcon = (
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/posts/create"
        >
          <i className="far fa-plus-square"></i>Add meme
        </NavLink>
      );

    // Icons displayed when user is logged in
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
            <i className="fas fa-thumbtack"></i>
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
            <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={40} />
        </NavLink>

   </>;
    // Icons displayed when user is logged out
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
    <Navbar  expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
      <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" height="125" />
        </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle 

            ref={ref}
            onClick={() => setExpanded(!expanded)}
            aria-controls="basic-navbar-nav"
            className='navbarToggle'
        />
       <Navbar.Collapse id="basic-navbar-nav"
                    className='mr-auto flex-column text-center'>

          <Nav className="ml-auto text-left">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
            <i className="fas fa-house-user"></i>
            Home
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/info">
            <i className="fas fa-cat"></i>
            Info
            </NavLink>
            {/* Display new meme icon if user is logged in */}
            {currentUser && newPostIcon}

            {/* Display appropriate icons based on user login status */}
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar