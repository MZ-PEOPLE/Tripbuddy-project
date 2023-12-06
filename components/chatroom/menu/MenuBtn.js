import { IoMenu } from "react-icons/io5";
import styles from "./MenuBtn.module.css";

export default function MenuBtn({ bar, setBar }) {

    const handleMenuClick = () => {
        setBar(!bar)
    };

    return (
        <div>
            <IoMenu onClick={handleMenuClick} className={styles.menuIcon} />
        </div>
    );
}