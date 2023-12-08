import styles from "./LoginContents.module.css";
import Logo from "../topbar/Logo";

function LoginContents() {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <Logo />
      </div>
      <div className={styles.text}>
        로그인하고<br></br> 여행을 계속해요
      </div>
    </div>
  );
}

export default LoginContents;
