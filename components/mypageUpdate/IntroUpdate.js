import styles from "./IntroUpdate.module.css";
import React, { useState, useRef } from "react";

export default function IntroUpdate({ userIntro, onUpdate }) {
  const [newIntro, setNewIntro] = useState(userIntro);
  const introInputRef = useRef("");

  const handleIntroChange = (event) => {
    const updatedIntro = event.target.value;
    setNewIntro(updatedIntro);
    onUpdate(updatedIntro);
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
        </div>
      </div>
    </div>
  );
}
