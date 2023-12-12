import Link from "next/link";
import styles from "./AlertBell.module.css";
import { FaRegBell } from "react-icons/fa";

const AlertBell = () => {
  return (
    <Link href="/alert">
      <FaRegBell className={styles.imgs} />
    </Link>
  );
};

export default AlertBell;
