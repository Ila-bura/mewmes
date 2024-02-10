import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser();

  // Function to handle follow action
  const handleFollow = async (clickedProfile) => {
    try {
      // Send POST request to add follower relationship
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      // Update profile data with new follow relationship
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
      }));
    } catch (err) {
      // console.log(err)
    }
  };

  // Function to handle unfollow action
  const handleUnfollow = async (clickedProfile) => {
    try {
      // Send delete request to remove follower relationship
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

      // Update profile data after unfollow
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
      }));
    } catch (err) {
      // console.log(err)
    }
  };

  // Fetch popular profiles on component mount or when current user changes
  useEffect(() => {
    const handleMount = async () => {
      try {
        // Fetch popular profiles sorted by follower count
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        // Update popular profiles in profile data
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        // console.log(err)
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
