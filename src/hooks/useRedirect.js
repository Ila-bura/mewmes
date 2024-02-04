import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

// Redirect users based on authentication status
export const useRedirect = (userAuthStatus) => {
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.post('/dj-rest-auth/token/refresh/')
                // Redirect to home page if user is logged in
                if (userAuthStatus === 'loggedIn'){
                    history.push('/')
                }
            } catch (err) {
                // If token refresh fails or user is logged out, redirect to home page
                if (userAuthStatus === 'loggedOut'){
                    history.push('/')
                }
            }
        }
        handleMount();
    }, [history, userAuthStatus]);
}