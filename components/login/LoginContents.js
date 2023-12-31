import styles from "./LoginContents.module.css";
import { ImAirplane } from "react-icons/im";

const logoImg = "/img/logo.png";
const ImgSrc = "/img/loginImg.png";

function LoginContents() {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={logoImg} className={styles.logo} />
        <ImAirplane className={styles.icon} />
      </div>
      <div className={styles.loginImage}>
        <img className={styles.img} src={ImgSrc} alt="Profile" />
      </div>

      <div className={styles.text}>로그인하고 여행을 계속해요</div>
    </div>
  );
}

export default LoginContents;
