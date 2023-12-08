import styles from "./IdUpdate.module.css";
import React, { useState, useRef } from 'react';
import { RxPencil1 } from "react-icons/rx";

export default function IdUpdate() {

    const idInputRef = useRef('');
    const [newId, setNewId] = useState('');

    const handleIdChange = (event) => {
        setNewId(event.target.value);
    };
    const idUpdateClick = () => {
        console.log("아이디 수정", newId);
    };

    return (
        <div className={styles.idFrame}>
            <div className={styles.profileId}>아이디
                <input
                    type="text"
                    className={styles.idUpdate}
                    value={newId}
                    onChange={handleIdChange}
                    ref={idInputRef}
                />
                <button className={styles.idButton} onClick={idUpdateClick}><RxPencil1 /></button>
            </div>
        </div>
    )
}