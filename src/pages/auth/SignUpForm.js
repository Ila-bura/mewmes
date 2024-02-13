import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";
import { NotificationManager } from "react-notifications";

const SignUpForm = () => {
  useRedirect("loggedIn");
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  // Function to handle input change
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send sign up request
      await axios.post("/dj-rest-auth/registration/", signUpData);
      // Display Info notification
      NotificationManager.info("Now please sign in!", "Almost there!", 3000);
      // Redirect to sign in page after successful sign up
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
      // Display error notification
      NotificationManager.error(
        "Please try again",
        "Something went wrong!",
        2000
      );
    }
  };

  return (
    <Row className={styles.Row}>
      <Col
        className={`my-auto d-none d-md-block p-6 ${styles.SignUpCol}`}
        md={7}
      >
        <Image
          className={`${styles.FillerImage}`}
          src={
            "https://res.cloudinary.com/ilabura/image/upload/v1707081374/360_F_139467125_0AWeutakD4dzNp7MmsouL8PDBiftShTI_rvkzzx.jpg"
          }
          height={350}
          width={560}
          alt="signup picture"
        />
      </Col>
      <Col className="my-auto py-2 p-md-2" md={4}>
        <Container className={`${styles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {/* Displaying username errors */}
            {errors.username?.map((message, idx) => (
              <Alert variant="secondary" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {/* Displaying password1 errors */}
            {errors.password1?.map((message, idx) => (
              <Alert variant="secondary" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {/* Displaying password2 errors */}
            {errors.password2?.map((message, idx) => (
              <Alert variant="secondary" key={idx}>
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Light}`}
              type="submit"
            >
              Sign Up
            </Button>
            {/* Displaying non-field errors */}
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="secondary" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          {/* Link to sign in page */}
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in!</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
