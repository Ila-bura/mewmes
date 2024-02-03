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
                    save
                </button>
                <button
                    className={styles.Button}
                    onClick={() => setShowEditForm(false)}
                    type="button"
                >
                    cancel
                </button>

            </div>
        </Form>
    );
}

export default ReplyEditForm;