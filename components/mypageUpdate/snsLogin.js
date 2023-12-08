import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import styles from "./snsLogin.module.css";

export default function snsLogin() {
    return (
        <div className={styles.loginFrame}>
            <div className={styles.profileLogin}>소설 계정 연동</div>
            <div className={styles.snsLoginFrame}>
                <FaFacebookSquare className={styles.loginFacebook} />
                <FaSquareInstagram className={styles.loginInstagram} />
            </div>
        </div>
    )
}

