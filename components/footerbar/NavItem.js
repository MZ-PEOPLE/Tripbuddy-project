import Link from "next/link";
import styles from "./Navitem.module.css";

const NavItem = ({ href, icon, text }) => (
  <li>
    <Link href={href}>
      <div>
        <span className={styles.iconSize}>{icon}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </Link>
  </li>
);

export default NavItem;
