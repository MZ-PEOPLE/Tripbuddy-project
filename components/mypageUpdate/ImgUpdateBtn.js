import React, { useRef, useState } from 'react';
import { PiCameraDuotone } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./ImgUpdateBtn.module.css";


export default function ImgUpdateBtn() {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        // FileReader를 사용하여 이미지를 읽고, 이미지 데이터를 설정합니다.
        const reader = new FileReader();
        reader.onload = () => {
            const imageDataUrl = reader.result;
            setSelectedImage(imageDataUrl);
        };
        reader.readAsDataURL(selectedFile);
    };

    const handleDeleteButtonClick = () => {
        setSelectedImage(null);
    };

    return (
        <div className={styles.mainFrame}>
            <div>
                <div className={styles.frame}>
                    <button onClick={handleButtonClick} className={styles.test}>
                        <PiCameraDuotone className={styles.imgUpdateBtn} />
                    </button>
                    <img className={styles.profileImg} src={selectedImage} alt="프로필 사진 업로드" />
                </div>
            </div>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
            {selectedImage && (
                <button className={styles.deleteBtn} onClick={handleDeleteButtonClick}><FaTrashAlt /></button>
            )}
        </div>

    );
}


