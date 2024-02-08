import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from '../api/axiosDefaults';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { removeTokenTimestamp, shouldRefreshToken } from '../utils/utils';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// Custom hooks to access current user and set current user
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  // Fetch current user data when component mounts
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  // Handle token refresh and unauthorized requests
  useMemo(() => {
    // Intercept request to refresh token
    axiosReq.interceptors.request.use(
        async (config) => {
            if (shouldRefreshToken()) {
                try {
                    await axios.post("/dj-rest-auth/token/refresh/");
                } catch (err) {
                    setCurrentUser((prevCurrentUser) => {
                        if (prevCurrentUser) {
                            history.push("/signin");
                        }
                        return null;
                    });
                    removeTokenTimestamp();
                    return config;
                }
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        }
    );

    // Intercept response to handle unauthorized status
    axiosRes.interceptors.response.use(
        (response) => response,
        async (err) => {
            if (err.response?.status === 401) {
                try {
                    await axios.post("/dj-rest-auth/token/refresh/");
                } catch (err) {
                    setCurrentUser((prevCurrentUser) => {
                        // Redirect to sign in page if user is authenticated
                        if (prevCurrentUser) {
                            history.push("/signin");
                        }
                        return null;
                    });
                    removeTokenTimestamp();
                }
                return axios(err.config);
            }
            return Promise.reject(err);
        }
    );
}, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};