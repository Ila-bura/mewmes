import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NotificationManager } from "react-notifications";

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
  // Check if current user is the owner of the meme
  const is_owner = currentUser?.username === owner;
  const is_user = currentUser?.username;
  const history = useHistory();

  // Bookmark memes
  const handleBookmark = async () => {
    try {
      const { data } = await axiosRes.post("/saved/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id ? { ...post, saved_id: data.id } : post;
        }),
      }));
    } catch (err) {
      // console.log(err)
    }
  };

  // Remove bookmark from memes
  const handleUnbookmark = async () => {
    try {
      await axiosRes.delete(`/saved/${saved_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, saved_count: post.saved_count - 1, saved_id: null }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err)
    }
  };

  // Adding thumbs up reaction to posts; keeping count of thumbs ups
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/votes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          // Check if ids match
          return post.id === id
            ? { ...post, votes_count: post.votes_count + 1, vote_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err)
    }
  };

  // Removing thumbs up reaction to posts; updating count of thumbs ups
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/votes/${vote_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          // Check if ids match
          return post.id === id
            ? { ...post, votes_count: post.votes_count - 1, vote_id: null }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err)
    }
  };

  // Adding thumbs down reaction to posts; keeping count of thumbs down
  const handleDislike = async () => {
    try {
      const { data } = await axiosRes.post("/downvotes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                downvotes_count: post.downvotes_count + 1,
                downvote_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err)
    }
  };

  // Removing thumbs down reaction to posts; updating count of thumbs down
  const handleUndislike = async () => {
    try {
      await axiosRes.delete(`/downvotes/${downvote_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                downvotes_count: post.downvotes_count - 1,
                downvote_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err)
    }
  };

  // Meme owner can edit their posts
  const handleEdit = () => {
    history.push(`/posts/${id}/edit/`);
  };
  // Meme owner can delete their posts
  const handleDelete = async () => {
    // Display warning notification
    NotificationManager.warning(
      "Are you sure you want to delete your meme?",
      "Click to delete",
      5000,
      async () => {
        try {
          await axiosRes.delete(`/posts/${id}/`);
          // Display success notification
          NotificationManager.success("Meme Deleted!", "It's gone!");
          history.goBack();
        } catch (err) {
          // Display error notification
          NotificationManager.error(
            "Please try again",
            "Something went wrong!"
          );
        }
      }
    );
  };

  return (
    // Render a card component for the meme
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link
            to={`/profiles/${profile_id}`}
            aria-label={`View profile of ${owner}`}
          >
            <Avatar src={profile_image} height={52} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img
          src={image}
          height={450}
          width={300}
          alt={title}
          className={styles.PostPic}
        />
      </Link>

      {is_owner && postFeed && (
        <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
      )}

      <Card.Body>
        {title && (
          <Card.Title className={`text-center ${styles.MemeTitle}`}>
            {title}
          </Card.Title>
        )}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            // Check if user is the owner of the meme
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You cannot save your own meme!</Tooltip>}
            >
              <i className="fas fa-thumbtack" />
            </OverlayTrigger>
          ) : saved_id ? (
            // Saved meme
            <span onClick={handleUnbookmark}>
              <i className={`fas fa-thumbtack ${styles.Bookmark}`} />
            </span>
          ) : currentUser ? (
            // Save meme
            <span onClick={handleBookmark}>
              <i className={`fas fa-thumbtack ${styles.BookmarkOutline}`} />
            </span>
          ) : (
            // Prompt user to log in to save memes
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Log in to save memes!</Tooltip>}
            >
              <Link to="/signin" aria-label="Log in to save memes">
                <i className="fas fa-thumbtack" />
              </Link>
            </OverlayTrigger>
          )}

          {is_owner ? (
            // Check if user is the owner of the meme
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip>C'mon, you cannot laugh at your own meme!</Tooltip>
              }
            >
              <i className="far fa-grin-squint-tears" />
            </OverlayTrigger>
          ) : vote_id ? (
            <span onClick={handleUnlike}>
              <i className={`far fa-grin-squint-tears ${styles.Laugh}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike} aria-label="Like this post">
              <i
                className={`far fa-grin-squint-tears ${styles.LaughOutline}`}
              />
            </span>
          ) : (
            // Prompt users to log in to vote for memes
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Log in to laugh at memes!</Tooltip>}
            >
              <Link to="/signin" aria-label="Log in to react">
                <i className="far fa-grin-squint-tears" />
              </Link>
            </OverlayTrigger>
          )}
          {votes_count}
          {is_owner ? (
            // Check if user is the owner of the meme
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip>C'mon, you cannot dislike your own meme!</Tooltip>
              }
            >
              <i className="far fa-sad-tear" />
            </OverlayTrigger>
          ) : downvote_id ? (
            <span onClick={handleUndislike}>
              <i className={`far fa-sad-tear ${styles.Dislike}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleDislike} aria-label="Dislike this post">
              <i className={`far fa-sad-tear ${styles.DislikeOutline}`} />
            </span>
          ) : (
            // Prompt users to log in to vote for memes
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Log in to react on memes!</Tooltip>}
            >
              <Link to="/signin" aria-label="Log in to react">
                <i className="far fa-sad-tear" />
              </Link>
            </OverlayTrigger>
          )}
          {downvotes_count}

          {is_user ? (
            <Link to={`/posts/${id}`} aria-label="Comment on this post">
              <i className="far fa-comments" />
            </Link>
          ) : currentUser ? (
            <span>
              <i className="far fa-comments" />
            </span>
          ) : (
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Log in to comment on memes!</Tooltip>}
            >
              <Link to="/signin" aria-label="Log in to comment">
                <i className="far fa-comments" />
              </Link>
            </OverlayTrigger>
          )}
          {reply_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
