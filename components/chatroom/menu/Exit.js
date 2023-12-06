import styles from "./Exit.module.css"
import { IoExitOutline } from "react-icons/io5";
export default function Exit() {
    return (
        <div>
            <button className={styles.exitChat}> <IoExitOutline /></button>
        </div>
    )
}