import React from 'react'
import './Reset.module.css';
import styles from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={styles["message-wrapper-from"]}>
            <div className={styles["user-logo-from"]}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={styles["message-from"]}>
                <span className={styles["message-who"]}>{props.name}</span>
                <span className={styles["message-text"]}>{props.message}</span>
                <div className={styles["message-time"]}>
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
