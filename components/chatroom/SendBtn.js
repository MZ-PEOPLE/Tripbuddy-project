import React from "react";
import styles from "./SendBtn.module.css";
export default function SendBtn() {
    return (
        <sendchat>
            <div className={styles.mainFrame}>
                <div className={styles.sendBtnFrame}>
                    <button className={styles.sendBtn}>전송</button>
                </div>
            </div>
        </sendchat >
    );

}