import React from 'react'
import './Reset.module.css';
import styles from './Message.module.css'

type AlternativeMessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: AlternativeMessageType) {
    return (
        <div className={styles["message-wrapper-to"]}>
            <div className={styles["message-to"]}>
                <span className={styles["message-who"]}>{props.name}</span>
                <span className={styles["message-text"]}>{props.message}</span>
                <div className={styles["message-time"]}>
                    <span>{props.time}</span>
                </div>
            </div>
            <div className={styles["user-logo-to"]}>
                <img src={props.avatar} alt="avatar"/>
            </div>
        </div>
    )
}

export default Message
