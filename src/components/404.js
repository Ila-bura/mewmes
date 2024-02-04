import React from 'react';
import NotFound from "../assets/notfound.png";
import Asset from './Asset';
import styles from "../styles/404.module.css";


const NotFound404 = () => {
    return (
        <div className={styles.NotFound}>
            <Asset
                src={NotFound}
                message={`Oh oh! Nothing to see here, sorry!`}
            />
        </div>
    );
};

export default NotFound404;