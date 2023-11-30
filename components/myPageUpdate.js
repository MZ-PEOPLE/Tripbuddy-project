import styles from "./myPageUpdate.module.css";
import React, { useState, useRef } from 'react';
import { RxPencil1 } from "react-icons/rx";
import { PiCameraDuotone } from "react-icons/pi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";




export default function ProfileUpdate() {

    const [newId, setNewId] = useState('');
    const idInputRef = useRef('');
    const [newIntro, setNewIntro] = useState('');
    const introInputRef = useRef('');

    const handleIdChange = (event) => {
        setNewId(event.target.value);
    };

    const handleIntroChange = (event) => {
        setNewIntro(event.target.value);
    };

    const idUpdateClick = () => {
        console.log("아이디 수정", newId);
    };
    const introUpdateClick = () => {
        console.log("소개글 수정", newIntro);
    };
    return (
        <div className={styles.frame}>
            <div className={styles.userId}> {/*프로필사진,아이디*/}
                <div className={styles.imgFrame}>
                    <button onClick={idUpdateClick}> <PiCameraDuotone className={styles.imgUpdateClick} /></button>
                    <img className={styles.profileImg} src="/img/profile_test.png" />
                </div>
                <div className={styles.idFrame}>
                    <div className={styles.profileId}>아이디</div>
                    <div className={styles.idUpdateFrame}>
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
            </div>
            <div className={styles.introFrame}>
                <div className={styles.profileIntro}>한줄소개</div>
                <div className={styles.introUpdateFrame}>
                    <input
                        type="text"
                        className={styles.introUpdate}
                        value={newIntro}
                        onChange={handleIntroChange}
                        ref={introInputRef}
                    />
                    <button className={styles.introButton} onClick={introUpdateClick}> <RxPencil1 /></button>
                </div>
            </div>

            <div className={styles.loginFrame}>
                <div className={styles.profileLogin}>소설 계정 연동</div>
                <div className={styles.snsLoginFrame}>
                    <FaFacebookSquare className={styles.loginFacebook} />
                    <FaSquareInstagram className={styles.loginInstagram} />
                </div>

            </div>

        </div>

    );
}