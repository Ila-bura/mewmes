import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { BeatLoader } from "react-spinners"; 
import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import NoResults from "../../assets/noresults.png";
import Post from "../posts/Post";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { fetchMoreData } from "../../utils/utils";
import {
    useProfileData,
    useSetProfileData,
} from "../../contexts/ProfileDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;

  // Check if the current user is the owner of the profile
  const is_owner = currentUser?.username === profile?.owner;

  // Fetch profile data and profile memes
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

// JSX for main profile section
  const mainProfile = (
    <>
    {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
        <Image className={styles.ProfileImage} roundedCircle src={profile?.image} alt="avatar"/>
        <h3 className={`mr-5 d-flex justify-content-center ${styles.ProfileName}`}>{profile?.owner}</h3>
        </Col>
        <Col lg={8}>
        <Row className={`justify-content-center no-gutters ${styles.OwnersMemes}`}>
            <Col xs={4} className='my-5'>
                <div>{profile?.posts_count}</div>
                <div>Memes</div>
            </Col>
            <Col xs={4} className='my-5'>
                <div>{profile?.followers_count}</div>
                <div>Followers</div>
            </Col>
            <Col xs={4} className='my-5'>
                <div>{profile?.following_count}</div>
                <div>Following</div>
            </Col>

            <Col lg={5} className="text-lg-left">
                {currentUser &&
                    !is_owner &&
                    (profile?.following_id ? (
                        <Button
                            className={btnStyles.UnFollow}
                            onClick={() => { handleUnfollow(profile) }}
                        >
                            Unfollow me
                        </Button>
                    ) : (
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Follow}`}
                            onClick={() => { handleFollow(profile) }}
                        >
                            Follow me
                        </Button>
                    ))}
            </Col>
        </Row>
    </Col>
    <hr />
    {profile?.content && <Col className={`col-12 p-5 ${styles.AboutContent}`}>{profile.content}</Col>}
</Row>
</>
    );

    // JSX for main profile memes section
  const mainProfilePosts = (
    <>
            <hr />
            <p className={`text-center ${styles.OwnersMemes}`}>{profile?.owner}'s memes</p>
            <hr />
            {profilePosts.results.length ? (
                <InfiniteScroll
                    children={profilePosts.results.map((post) => (
                        <Post key={post.id} {...post} setPosts={setProfilePosts} />
                    ))}
                    dataLength={profilePosts.results.length}
                    loader={<BeatLoader color="#36D7B7" />}
                    hasMore={!!profilePosts.next}
                    next={() => fetchMoreData(profilePosts, setProfilePosts)}
                />
            ) : (
                // Render no results message if no memes available
                <Asset
                    src={NoResults}
                    message={`No memes found, ${profile?.owner} hasn't posted anything yet!`}
                />
            )}
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
            <BeatLoader color="#36D7B7" /> // Render loading spinner if data is loading
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