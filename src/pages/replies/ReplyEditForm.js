import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/ReplyCreateEditForm.module.css";

function ReplyEditForm(props) {
    const { id, content, setShowEditForm, setReplies } = props;

    const [formContent, setFormContent] = useState(content);

    const handleChange = (event) => {
        setFormContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Update the reply content 
            await axiosRes.put(`/reply/${id}/`, {
                content: formContent.trim(),
            });
            // Update the replies state with the edited reply content
            setReplies((prevReplies) => ({
                ...prevReplies,
                results: prevReplies.results.map((reply) => {
                    return reply.id === id
                        ? {
                            ...reply,
                            content: formContent.trim(),
                            updated_at: "now",
                        }
                        : reply;
                }),
            }));
            // Hide the edit form after successful submission
            setShowEditForm(false);
        } catch (err) {
            // console.log(err);
        }
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="pr-1">
                <Form.Control
                    className={styles.Form}
                    as="textarea"
                    value={formContent}
                    onChange={handleChange}
                    rows={2}
                />
            </Form.Group>
            <div className="text-right">
                <button
                    className={styles.Button}
                    disabled={!content.trim()}
                    type="submit"
                >
                    Save
                </button>
                <button
                    className={styles.Button}
                    onClick={() => setShowEditForm(false)}
                    type="button"
                >
                    Cancel
                </button>

            </div>
        </Form>
    );
}

export default ReplyEditForm;