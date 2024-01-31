import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        reply_count,
        votes_count,
        downvotes_count,
        vote_id,
        saved_id,
        downvote_id,
        title,
        content,
        image,
        updated_at,
        postFeed,
        setPosts,
    } = props;
  
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
  
    return (
        <Card className={styles.Post}>
          <Card.Body>
            <Media className="align-items-center justify-content-between">
              <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={52} />
                {owner}
              </Link>
              <div className="d-flex align-items-center">
                <span>{updated_at}</span>
                {is_owner && postFeed && "..."}
              </div>
            </Media>
          </Card.Body>
          <Link to={`/posts/${id}`}>
            <Card.Img src={image} alt={title} />
          </Link>
          <Card.Body>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
            {content && <Card.Text>{content}</Card.Text>}
            <div className={styles.PostBar}>

              {is_owner ? (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>C'mon, you cannot save your own meme!</Tooltip>}
                >
                  <i className="fas fa-thumbtack" />
                </OverlayTrigger>
              ) : saved_id ? (
                <span onClick={() => {}}>
                  <i className={`fas fa-thumbtack ${styles.Bookmark}`} />
                </span>
              ) : currentUser ? (
                <span onClick={() => {}}>
                  <i className={`fas fa-thumbtack ${styles.BookmarkOutline}`} />
                </span>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Log in to save memes!</Tooltip>}
                >
                  <i className="fas fa-thumbtack" />
                </OverlayTrigger>
              )}
    
              {is_owner ? (
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>C'mon, you cannot vote for your own meme!</Tooltip>}
                >
                  <i className="far fa-thumbs-up" />
                </OverlayTrigger>
              ) : vote_id ? (
                <span>
                  <i className={`far fa-thumbs-up ${styles.Upvote}`} />
                </span>
              ) : currentUser ? (
                <span>
                  <i className={`far fa-thumbs-up ${styles.UpvoteOutline}`} />
                </span>
              ) : (
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Sign in to vote for memes!</Tooltip>}
                >
                  <Link to="/signin">
                    <i className="far fa-thumbs-up" />
                  </Link>
                </OverlayTrigger>
              )}
              
              # Display the number of thumbs up
    
              {votes_count}
              {is_owner ? (
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>C'mon, you cannot vote for your own meme!</Tooltip>}
                >
                  <i className="fas fa-thumbs-down" />
                </OverlayTrigger>
              ) : downvote_id ? (
                <span>
                  <i className={`fas fa-thumbs-down ${styles.Downvote}`} />
                </span>
              ) : currentUser ? (
                <span>
                  <i className={`fas fa-thumbs-down ${styles.DownvoteOutline}`} />
                </span>
              ) : (
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Sign in to vote for memes!</Tooltip>}
                >
                  <Link to="/signin">
                    <i className="fas fa-thumbs-down" />
                  </Link>
                </OverlayTrigger>
              )}
              
              # Display the number of thumbs down
        
              {downvotes_count}
    
              <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
              {reply_count}
            </div>
          </Card.Body>
        </Card>
      );
    };
    
    export default Post;