import Link from "next/link";
import styles from "./AlertBell.module.css";

const AlertBell = () => {
  const img_src = "/img/bell.png";

  return (
    <Link href="/alert">
      <img src={img_src} className={styles.imgs}></img>
    </Link>
  );
};

export default AlertBell;
