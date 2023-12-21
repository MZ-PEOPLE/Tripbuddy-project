import { PiGearLight } from "react-icons/pi";
import styles from "./Gearbar.module.css";
import { useState } from "react";

export default function Gearbar() {
  const [gear, setGear] = useState(false);

  const gearClickHandler = () => {
    console.log(gear);
    setGear(!gear);
  };

  const logoutClickHandler = (event) => {
    event.stopPropagation();
    localStorage.removeItem("token");
    window.location = "/";
  };

  onclick;
  return (
    <div>
      <PiGearLight className={styles.gear} onClick={gearClickHandler} />
      {gear ? (
        <div className={styles.container} onClick={gearClickHandler}>
          <div className={styles.logout}>
            <span>좋아요 누른 게시물 (실험실)</span>
          </div>
          <div className={styles.logout}>
            <span>설정 및 개인정보 (실험실)</span>
          </div>
          <div className={styles.logout} onClick={logoutClickHandler}>
            <div>로그아웃</div>
          </div>
          <div className={styles.logout}>
            <span>취소</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
