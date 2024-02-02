import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/ReplyForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function ReplyCreateForm(props) {
    // Destructure props
    const { post, setPost, setReplies, profileImage, profile_id } = props;
    const [content, setContent] = useState("");

    // Function to handle content change
    const handleChange = (event) => {
        setContent(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send a request to create a reply
            const { data } = await axiosRes.post("/reply/", {
                content,
                post,
            });
            // Update replies state with the new reply
            setReplies((prevReplies) => ({
                ...prevReplies,
                results: [data, ...prevReplies.results],
            }));
            // Update meme state with the incremented reply count
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        reply_count: prevPost.results[0].reply_count + 1,
                    },
                ],
            }));
            // Clear the content after successful submission
            setContent("");
        } catch (err) {
            // console.log(err);
        }
    };


    return (
        <Form className='mt-2' onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                {/* Link to the profile of the user */}
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profileImage} />
                    </Link>
                    <Form.Control
                        className={styles.Form}
                        placeholder="Any comments?"
                        as="textarea"
                        value={content}
                        onChange={handleChange}
                        rows={2}
                    />
                </InputGroup>
            </Form.Group>
            <button
                className={`${styles.Button} btn d-block m-auto`}
                disabled={!content.trim()}
                type="submit"
            >
                Publish
            </button>
        </Form>
    );
}

export default ReplyCreateForm;