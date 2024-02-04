import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

const SignInForm = () => {
    // State for current user
    const setCurrentUser = useSetCurrentUser();

      // State for sign in data
    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    })
    const { username, password } = signInData;

    const [errors, setErrors] = useState({})

    const history = useHistory();

    // Function to handle input change
    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value
        });
    };
    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send sign in request
            const { data } = await axios.post("/dj-rest-auth/login/", signInData);
            // Set current user after successful sign in
            setCurrentUser(data.user);
             // Redirect to home page
            history.push("/");
        }   catch (err) {
            setErrors(err.response?.data);
        }
      };

    return (
        <Row className={styles.Row}>
        <Col md={7}
        className={`my-auto d-none d-md-block p-6 ${styles.SignInCol}`}>
        <Image
            className={`${styles.FillerImage}`}
            src={"https://res.cloudinary.com/ilabura/image/upload/v1707059814/signup_jd2g6e.jpg"}
            height={300}
            width={560}
            alt="signin picture"
            />
            </Col>
            <Col className="my-auto py-2 p-md-3" md={4}>
            <Container className={`${styles.Content} p-4 `}>
            <h1 className={styles.Header}>Sign in</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username </Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={handleChange} />
                </Form.Group>
                {/* Displaying username errors */}
                {errors.username?.map((message, idx) => (
                    <Alert variant="secondary" key={idx}>{message}
                    </Alert>
                ))}

                <Form.Group controlId="password">
                    <Form.Label className="d-none">Password </Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange} />
                </Form.Group>
                {/* Displaying password errors */}
                {errors.password?.map((message, idx) => (
                    <Alert variant="secondary" key={idx}>{message}
                    </Alert>
                ))}
                <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Light}`} type="submit">
                    Sign in
                </Button>
                 {/* Displaying non-field errors */}
                {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="secondary" className="mt-3">{message}
                    </Alert>
                ))}
            </Form>
            </Container>
            <Container className={`mt-3 ${appStyles.Content}`}>
            {/* Link to sign up page */}
            <Link className={styles.Link} to="/signup">
                No account yet? <span>Sign up here!</span>
            </Link>
            </Container>
            </Col>
        
        </Row>
    );
    }

export default SignInForm;