import styles from "./IntroUpdate.module.css";
import React, { useState, useRef } from 'react';
import { RxPencil1 } from "react-icons/rx";

export default function IntroUpdate() {

    const [newIntro, setNewIntro] = useState('');
    const introInputRef = useRef('');

    const handleIntroChange = (event) => {
        setNewIntro(event.target.value);
    };

    const introUpdateClick = () => {
        console.log("소개글 수정", newIntro);
    };
    return (
        <div className={styles.introFrame}>
            <div className={styles.profileIntro}>한줄소개</div>

            <input
                type="text"
                className={styles.introUpdate}
                value={newIntro}
                onChange={handleIntroChange}
                ref={introInputRef}
            />
            <button className={styles.introBtn} onClick={introUpdateClick}> <RxPencil1 /></button>

        </div>
    )
}