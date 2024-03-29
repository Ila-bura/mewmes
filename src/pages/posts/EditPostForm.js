import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import {NotificationManager} from 'react-notifications';


function EditPostForm() {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image: "",
        imageFilter: "",
    });
    const { title, content, image } = postData;

    // Ref for image input
    const imageInput = useRef(null);

    // History hook for navigation
    const history = useHistory();

    // Get the 'id' parameter from URL
    const { id } = useParams();

    // Fetch post data when component mounts
    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}/`);
                const { title, content, image, is_owner } = data;

                // If user is not the owner of the meme, redirect to home
                is_owner ? setPostData({ title, content, image }) : history.push("/");
            } catch (err) {
                //console.log(err);
            }
        };
        handleMount();
    }, [history, id]);


    // Handler for input changes
    const handleChange = (event) => {
        setPostData({
        ...postData,
        [event.target.name]: event.target.value,
        });
    };

    // Handler for image file change
    const handleChangeImage = (event) => {
        if (event.target.files.length) {
        URL.revokeObjectURL(image);
        setPostData({
            ...postData,
            image: URL.createObjectURL(event.target.files[0]),
        });
        }
    };

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("content", content);


        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        try {
            await axiosReq.put(`/posts/${id}/`, formData);
            history.push(`/posts/${id}`);
            // Display success notification
            NotificationManager.success('Meme updated successfully!', 'Well done!', 2000);
        } catch (err) {
            //console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
                // Display error notification
                NotificationManager.error('Please try again', 'Something went wrong!', 2000)
            }
        }
    };


    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={title}
                    onChange={handleChange}/>
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="secondary" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={6} name="content" value={content}
                    onChange={handleChange}/>
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button className={`${btnStyles.Button}`} type="submit">
                Save changes
            </Button>
            <Button
                className={`${btnStyles.Button}`}
                onClick={() => history.goBack()}>
                Cancel
            </Button>
            </div>
        );

    return (
        <Form onSubmit={handleSubmit}>
        <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
            <Container
                className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
                <Form.Group className="text-center">

            
                    <figure>
                        <Image className={appStyles.Image} src={image} rounded />
                    </figure>
                    <div>
                        <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Light} btn`}
                        htmlFor="image-upload"
                        >
                        Change the image
                        </Form.Label>
                    </div>

                    <Form.Control       
                        className="d-none"
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        onChange={handleChangeImage}
                        ref={imageInput}
                    />
                </Form.Group>
                {errors?.image?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
            {message}
            </Alert>
            ))}

                <div className="d-md-none">{textFields}</div>
            </Container>
            </Col>
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
            <Container className={appStyles.Content}>{textFields}</Container>
            </Col>
        </Row>
        </Form>
    );
    }

export default EditPostForm;