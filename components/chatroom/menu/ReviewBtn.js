import styles from "./ReviewBtn.module.css";
import Link from "next/link";

export default function ReviewBtn() {
    return (
        <Link href={`/reviewwrite`} className={styles.link}>
            <div className={styles.frame}>
                <div className={styles.reviewbtn}>동행 후기 작성<button></button></div>
            </div >
        </Link>

    )
}