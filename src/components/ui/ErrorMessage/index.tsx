import React from 'react';
import { useSelector } from "react-redux";
import {AppState} from '../../../reducers/index';
import styles from './index.module.css'
import Toast from 'react-bootstrap/Toast';
  
const ErrorMessage: React.FC = () => {
    const message = useSelector(({error}: AppState) => error.message);

    if (!message) {
        return null;
    }

    return (
        <Toast show={true} transition={false} autohide role="alert" className={styles.message}>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
};

export default ErrorMessage;
