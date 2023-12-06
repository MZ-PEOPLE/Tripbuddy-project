import styles from "./InfoMsg.module.css";

export default function InfoMsg() {
    return (
        <div>
            <div className={styles.infoFrame}>
                <div className={styles.infoMsg}>동행이 종료되었습니다</div>
            </div>
        </div>
    )
}