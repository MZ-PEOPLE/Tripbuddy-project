import styles from "./IntroUpdate.module.css";
import React, { useState, useRef } from "react";
import { PiPencilSimpleFill } from "react-icons/pi";

export default function IntroUpdate({ userIntro }) {
  const [newIntro, setNewIntro] = useState(userIntro);
  const introInputRef = useRef("");

  const handleIntroChange = (event) => {
    setNewIntro(event.target.value);
  };

  const introUpdateClick = () => {
    console.log("소개글 수정", newIntro);
  };
  return (
    <div className={styles.introFrame}>
      <div className={styles.profileIntro}>
        <div className={styles.profileIntroTitle}>소개글</div>
        <div className={styles.profileIntroBox}>
          <input
            type="text"
            className={styles.introUpdate}
            value={newIntro}
            onChange={handleIntroChange}
            ref={introInputRef}
          />
          <button onClick={introUpdateClick}>
            {" "}
            <PiPencilSimpleFill className={styles.introBtn} />
          </button>
        </div>
      </div>
    </div>
  );
}
