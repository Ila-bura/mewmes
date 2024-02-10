import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from '../../api/axiosDefaults';
import Avatar from "../../components/Avatar";
import styles from "../../styles/Reply.module.css";
import { MoreDropdown } from '../../components/MoreDropdown';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import ReplyEditForm from "./ReplyEditForm";
import {NotificationManager} from 'react-notifications';

const Reply = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, id, setPost,
    setReplies, } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();

  // Check if the current user is the owner of the reply
  const is_owner = currentUser?.username === owner;

  // Function to delete the reply
  const handleDelete = async () => {
    // Display warning notification
    NotificationManager.warning(
        'Are you sure you want to delete your comment?', 
        'Click to delete', 
        5000,
        async () => {
            try {
                await axiosRes.delete(`/reply/${id}/`);
                // Display success notification
                NotificationManager.success('Comment Deleted!', 'Success!');
                // Update the reply count of the post
                setPost((prevPost) => ({
                    results: [
                        {
                            ...prevPost.results[0],
                            reply_count: prevPost.results[0].reply_count - 1,
                        },
                    ],
                }));

                // Remove the deleted reply from the replies list
                setReplies((prevReplies) => ({
                    ...prevReplies,
                    results: prevReplies.results.filter((reply) => reply.id !== id),
                }));
            } catch (err) {
                // Display error notification
                NotificationManager.error('Please try again', 'Something went wrong!');
            }
        }
    );
};

    return (
        <>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    {/* Render the edit form if showEditForm is true, otherwise the content of the reply */}
                    {showEditForm ? (
                        <ReplyEditForm
                            id={id}
                            profile_id={profile_id}
                            content={content}
                            profileImage={profile_image}
                            setReplies={setReplies}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>
                {/* Render the more dropdown menu if the current user is the owner of the reply */}
                {is_owner && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )}
            </Media>
        </>
    );
    };

    export default Reply;