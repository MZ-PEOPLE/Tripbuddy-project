import React from "react";
import styles from "./ChatBar.module.css";
import MapBtn from "./MapBtn";;
import InputChat from "./InputChat";
import SendBtn from "./SendBtn";
export default function ChatBar() {
    return (
        <div className={styles.container}>
            <div className={styles.mapBtn}>
                <div><MapBtn /></div>
            </div>
            <div className={styles.sendBar}>
                <InputChat className={styles.inputChat} />
                <SendBtn />
            </div>
        </div>
    );

}