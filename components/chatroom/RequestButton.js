import styles from "./RequestButton.module.css";
import Link from "next/link";

export default function RequestButton() {
    return (
        <div className={styles.buttonFrame}>

            <button className={styles.msgButton}>동행요청</button>

        </div>
    );
}