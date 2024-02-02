import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: ""
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
            // Redirect to sign in page after successful sign up
            history.push("/signin");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className={`my-auto d-none d-md-block p-6 ${styles.SignUpCol}`} md={7}>
                <Image
                    className={`${styles.FillerImage}`}
                    src={"https://res.cloudinary.com/ilabura/image/upload/v1706358551/pexels-pixabay-248280_ohputd.jpg"}
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
                                onChange={handleChange}/>

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
                        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Light}`} type="submit">
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