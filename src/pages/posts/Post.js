import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

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

    // Bookmark memes 
    const handleBookmark = async () => {
        try {
            const { data } = await axiosRes.post("/saved/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, saved_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
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
            // console.log(err);
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
            // console.log(err);
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
            // console.log(err);
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
                        ? { ...post, downvotes_count: post.downvotes_count + 1, downvote_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
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
                        ? { ...post, downvotes_count: post.downvotes_count - 1, downvote_id: null }
                        : post;
                    }),
                }));
            } catch (err) {
                // console.log(err);
            }
        };



    return (
        // Render a card component for the meme post
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
            <Card.Img src={image} height={650} width={350} alt={title} className={styles.PostPic}/>
          </Link>
          <Card.Body>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
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
                  placement="top"
                  overlay={<Tooltip>Log in to save memes!</Tooltip>}
                >
                  <i className="fas fa-thumbtack" />
                </OverlayTrigger>
              )}
    
              {is_owner ? (
                // Check if user is the owner of the meme 
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>C'mon, you cannot vote for your own meme!</Tooltip>}
                >
                  <i className="far fa-thumbs-up" />
                </OverlayTrigger>
              ) : vote_id ? (
                <span onClick={handleUnlike}>
                  <i className={`far fa-thumbs-up ${styles.Upvote}`} />
                </span>
              ) : currentUser ? (
                <span onClick={handleLike}>
                  <i className={`far fa-thumbs-up ${styles.UpvoteOutline}`} />
                </span>
              ) : (
                // Prompt users to log in to vote for memes
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Sign in to vote for memes!</Tooltip>}
                >
                  <Link to="/signin">
                    <i className="far fa-thumbs-up" />
                  </Link>
                </OverlayTrigger>
              )}
              {votes_count}
              {is_owner ? (
                // Check if user is the owner of the meme 
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>C'mon, you cannot dislike your own meme!</Tooltip>}
                >
                  <i className="fas fa-thumbs-down" />
                </OverlayTrigger>
              ) : downvote_id ? (
                <span onClick={handleUndislike}>
                  <i className={`fas fa-thumbs-down ${styles.Downvote}`} />
                </span>
              ) : currentUser ? (
                <span onClick={handleDislike}>
                  <i className={`fas fa-thumbs-down ${styles.DownvoteOutline}`} />
                </span>
              ) : (
                // Prompt users to log in to vote for memes
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Sign in to vote for memes!</Tooltip>}
                >
                  <Link to="/signin">
                    <i className="fas fa-thumbs-down" />
                  </Link>
                </OverlayTrigger>
              )}
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