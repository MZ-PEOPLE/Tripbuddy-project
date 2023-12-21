import styles from "@/components/topbar/Logo.module.css";
import Link from "next/link";

const logoImg = "/img/logo.png";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <img src={logoImg} alt="Logo" className={styles.logo} />
      </Link>
    </>
  );
};

export default Logo;
