import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { BeatLoader } from "react-spinners"; 

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import ReplyCreateForm from "../replies/ReplyCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Reply from "../replies/Reply";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";


function PostFeed() {
  // Get the 'id' parameter from URL  
  const { id } = useParams();

  // State variable to store meme data
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [replies, setReplies] = useState({ results: [] });

  // Fetch meme data when component mounts
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: replies }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/reply/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setReplies(replies);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <Post {...post.results[0]} setPosts={setPost} postFeed />
        <Container className={appStyles.Content}>
            {currentUser ? (
                <ReplyCreateForm
                profile_id={currentUser.profile_id}
                profileImage={profile_image}
                post={id}
                setPost={setPost}
                setReplies={setReplies}
            />
            ) : replies.results.length ? (
                "Replies"
            ) : null} 
            
            {replies.results.length ? (
                <InfiniteScroll
                children={replies.results.map((reply) => (
                    <Reply
                        key={reply.id}
                        {...reply}
                        setPost={setPost}
                        setReplies={setReplies}
                    />
                ))}
                dataLength={replies.results.length}
                loader={<BeatLoader color="#36d7b7" />}
                hasMore={!!replies.next}
                next={() => fetchMoreData(replies, setReplies)}
                />
            ) : currentUser ? (
              <span>No comments here for now, want to add something?</span>
            ) : (
              <span>Nothing to read yet!</span>
            )}             
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PostFeed;