import styles from "./IdUpdate.module.css";
import React, { useState, useRef } from "react";
import { PiPencilSimpleFill } from "react-icons/pi";

export default function IdUpdate({ userName }) {
  const idInputRef = useRef("");
  const [newId, setNewId] = useState(userName);

  const handleIdChange = (event) => {
    setNewId(event.target.value);
  };
  const idUpdateClick = () => {
    console.log("아이디 수정", newId);
  };

  return (
    <div className={styles.idFrame}>
      <div className={styles.profileId}>아이디</div>
      <div className={styles.profileName}>
        <input type="text" className={styles.idUpdate} value={newId} onChange={handleIdChange} ref={idInputRef} />
        <button onClick={idUpdateClick}>
          <PiPencilSimpleFill className={styles.idButton} />
        </button>
      </div>
    </div>
  );
}
