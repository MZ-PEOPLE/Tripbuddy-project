import Kakao from "./Kakao";
import styles from "./Loginbox.module.css";

function LoginBox() {
  return (
    <div className={styles.loginBox}>
      <div className={styles.loginsize}>
        <Kakao />
      </div>
    </div>
  );
}

export default LoginBox;
