import styles from "./ChatInfo.module.css";
import Exit from "./Exit"
import ChatUser from "./ChatUser"
import ReviewBtn from "./ReviewBtn"
export default function ChatInfo() {
    return (

        <div className={styles.main}>

            <div className={styles.info}>
                <div className={styles.btnFrame}>
                    <div className={styles.confirmTravel}>동행확정<button></button></div>
                    <div className={styles.dropTravel}>내보내기<button></button></div>
                </div>
                <Exit />
            </div>
            <ChatUser />
            <ReviewBtn />



        </div>

    )
}