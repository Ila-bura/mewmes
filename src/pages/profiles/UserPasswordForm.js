import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import {NotificationManager} from 'react-notifications';


const UserPasswordForm = () => {
    const history = useHistory();
    const { id } = useParams();
    const currentUser = useCurrentUser();

    const [userData, setUserData] = useState({
        new_password1: "",
        new_password2: "",
    });
    const { new_password1, new_password2 } = userData;

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (currentUser?.profile_id?.toString() !== id) {
            history.push("/");
        }
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", userData);
            // Display success notification
            NotificationManager.success('Password Updated!', 'Success!', 2000);
            history.goBack();
        } catch (err) {
            // console.log(err);
            setErrors(err.response?.data);
            // Display error notification
            NotificationManager.error('Please try again', 'Something went wrong!', 2000)
        }
    };

    return (
        <Row>
            <Col className="py-2 mx-auto text-center mt-4" md={6}>
                <Container className={appStyles.Content}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Type your new password</Form.Label>
                            <Form.Control
                                placeholder="New password"
                                type="password"
                                value={new_password1}
                                onChange={handleChange}
                                name="new_password1"
                            />
                        </Form.Group>
                        {errors?.new_password1?.map((message, idx) => (
                            <Alert key={idx} variant="secondary">
                                {message}
                            </Alert>
                        ))}
                        <Form.Group>
                            <Form.Label>Confirm your new password</Form.Label>
                            <Form.Control
                                placeholder="Confirm new password"
                                type="password"
                                value={new_password2}
                                onChange={handleChange}
                                name="new_password2"
                            />
                        </Form.Group>
                        {errors?.new_password2?.map((message, idx) => (
                            <Alert key={idx} variant="secondary">
                                {message}
                            </Alert>
                        ))}
                        <Button
                            type="submit"
                            className={`${btnStyles.Button} ${btnStyles.Light}`}
                        >
                            Save
                        </Button>
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Light}`}
                            onClick={() => history.goBack()}
                        >
                            Cancel
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default UserPasswordForm;