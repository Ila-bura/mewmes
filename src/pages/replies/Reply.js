import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from '../../api/axiosDefaults';
import Avatar from "../../components/Avatar";
import styles from "../../styles/Reply.module.css";
import { MoreDropdown } from '../../components/MoreDropdown';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Reply = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, id, setPost,
    setReplies, } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/reply/${id}/`);
        setPost((prevPost) => ({
            results: [
                {
                    ...prevPost.results[0],
                    reply_count: prevPost.results[0].reply_count - 1,
                },
            ],
        }));

        setReplies((prevReplies) => ({
            ...prevReplies,
            results: prevReplies.results.filter((reply) => reply.id !== id),
        }));
    } catch (err) { }
};

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
        {is_owner && (
                     <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete} />
                )}
          <span className={styles.Owner}>{owner}</span> <span></span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Reply;