import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";
import { BeatLoader } from "react-spinners"; 

const PopularProfiles = ({ mobile }) => {
    const { popularProfiles } = useProfileData();

    return (
        <Container
        className={`${appStyles.Content} ${
            mobile && "d-lg-none text-center mb-3"
        }`}
        >
        {popularProfiles.results.length ? (
            <>
            <p>Most followed profiles.</p>
            {mobile ? (
                <div className="d-flex justify-content-around">
                {popularProfiles.results.slice(0, 4).map((profile) => (
                    <Profile key={profile.id} profile={profile} mobile />
                ))}
                </div>
            ) : (
                popularProfiles.results.map((profile) => (
                    <Profile key={profile.id} profile={profile} />
                ))
            )}
            </>
        ) : (
            <BeatLoader color="#36D7B7" />
        )}
        </Container>
        );
    };

export default PopularProfiles;