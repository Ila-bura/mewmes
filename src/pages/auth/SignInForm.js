import React from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

function SignInForm() {
//   Add your component logic here

  return (
    <Row className={styles.Row}>
      <Col md={7} className={'my-auto d-none d-md-block p-6 ${styles.SignUpCol}'}>
      <Image
          className={`${appStyles.FillerImage}`}
          src={"https://res.cloudinary.com/ilabura/image/upload/v1706459613/pexels-joa%CC%83o-jesus-4929241_tgwiwn.jpg"}
          height={315}
          width={560}
        />
        </Col>
        <Col className="my-auto py-2 p-md-3" md={4}>
        <Container className={`${styles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign in</h1>
          <Form >
            <Form.Group controlId="username">
                <Form.Label className="d-none">Username </Form.Label>
                <Form.Control
                    className={styles.Input}
                    type="text"
                    placeholder="Username"
                    name="username"/>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label className="d-none">Password </Form.Label>
                <Form.Control
                    className={styles.Input}
                    type="password"
                    placeholder="Password"
                    name="password" />
            </Form.Group>
            <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Light}`} type="submit">
                Sign in
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            No account yet? <span>Sign up here!</span>
          </Link>
        </Container>
        </Col>
      
    </Row>
  );
}

export default SignInForm;