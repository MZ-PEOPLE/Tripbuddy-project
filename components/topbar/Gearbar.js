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
          <div className={styles.logout} onClick={logoutClickHandler}>
            <span>로그아웃</span>
          </div>
          <div className={styles.logout}>
            <span>취소</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
