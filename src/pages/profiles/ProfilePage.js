import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { BeatLoader } from "react-spinners"; 

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Button, Image } from "react-bootstrap";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
    useProfileData,
    useSetProfileData,
} from "../../contexts/ProfileDataContext";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData} = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
        try {
            const [{ data: pageProfile }, { data: profilePosts }] =
                await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                    axiosReq.get(`/posts/?owner__profile=${id}`),
                ]);
            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: { results: [pageProfile] },
            }));
            setProfilePosts(profilePosts);
            setHasLoaded(true);
        } catch (err) {
            // console.log(err);
        }
    };
    fetchData();
}, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
        <Image className={styles.ProfileImage} roundedCircle src={profile?.image} alt="avatar"/>
        <h3 className={`mr-5 d-flex justify-content-center ${styles.ProfileName}`}>{profile?.owner}</h3>
        </Col>
        <Col lg={8}>
        <Row className="justify-content-center no-gutters">
            <Col xs={4} className='my-5'>
                <div>{profile?.posts_count}</div>
                <div>posts</div>
            </Col>
            <Col xs={4} className='my-5'>
                <div>{profile?.followers_count}</div>
                <div>followers</div>
            </Col>
            <Col xs={4} className='my-5'>
                <div>{profile?.following_count}</div>
                <div>following</div>
            </Col>

            <Col lg={5} className="text-lg-left">
                {currentUser &&
                    !is_owner &&
                    (profile?.following_id ? (
                        <Button
                            className={btnStyles.UnFollow}
                            onClick={() => {}}
                        >
                            Unfollow me
                        </Button>
                    ) : (
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Follow}`}
                            onClick={() => {}}
                        >
                            Follow me
                        </Button>
                    ))}
            </Col>
        </Row>
    </Col>
    <hr />
    {profile?.content && <Col className={`col-12 p-5 ${styles.BioContent}`}>{profile.content}</Col>}
</Row>
</>
    );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <BeatLoader color="#36D7B7" />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;