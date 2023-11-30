import React from "react";
import styles from "./ChatList.module.css";

export default function ChatList() {
    return (
        <div className={styles.frame}>
            <div>
                <img className={styles.profileImg} src="/img/chatProfile" />

            </div>
        </div>
    )
}