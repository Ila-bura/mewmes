import React, { useEffect } from 'react';
import NotFound from "../assets/notfound.png";
import Asset from './Asset';
import styles from "../styles/NotFound.module.css";
import { useHistory } from 'react-router-dom';
import { BeatLoader } from "react-spinners"; 


const NotFound404 = () => {
    const history = useHistory();

    useEffect(() => {
        const timeout = setTimeout(() => {
            history.push('/');
        }, 5000);

        return () => clearTimeout(timeout);
    }, [history]);

    return (
        <div className={styles.NotFound}>
            <div className={styles.LoaderContainer}>
                <BeatLoader color="#36D7B7" />
            </div>
            <Asset
                src={NotFound}
                message={`This page does not exist. You'll be redirected to the HomePage now!`}
            />
        </div>
    );
};

export default NotFound404;