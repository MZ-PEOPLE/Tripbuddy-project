import React from "react";
import styles from "./ChatList.module.css";

export default function ChatList() {
    return (
        <div>
            <div className={styles.userFrame}>
                <div className={styles.imgFrame}>
                    <img className={styles.profileImg} src="/img/chatProfile.png" />
                </div>
                <div className={styles.chatContextFrame}>
                    <div className={styles.userIdFrame}>
                        <div className={styles.profileId}>치와와와</div>
                    </div>
                    <div className={styles.userChatFrame}>
                        <div className={styles.chatContext}>반가워요 와와에요오~</div>
                    </div>
                </div>
            </div>
        </div>
    )
}