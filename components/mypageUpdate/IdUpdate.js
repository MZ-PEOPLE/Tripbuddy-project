import styles from "./IdUpdate.module.css";
import React, { useState, useRef } from "react";

export default function IdUpdate({ userName, onUpdate }) {
  const idInputRef = useRef("");
  const [newId, setNewId] = useState(userName);

  const handleIdChange = (event) => {
    const updatedId = event.target.value;
    setNewId(updatedId);
    onUpdate(updatedId);
  };

  return (
    <div className={styles.idFrame}>
      <div className={styles.profileId}>아이디</div>
      <div className={styles.profileName}>
        <input type="text" className={styles.idUpdate} value={newId} onChange={handleIdChange} ref={idInputRef} />
      </div>
    </div>
  );
}
