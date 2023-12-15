import React, { useRef, useState } from "react";
import { PiCameraDuotone } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./ImgUpdateBtn.module.css";

export default function ImgUpdateBtn({ profileImage }) {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(profileImage);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
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
      <div className={styles.frame}>
        <button onClick={handleButtonClick}>
          <PiCameraDuotone className={styles.imgUpdateBtn} />
        </button>
        <img className={styles.profileImg} src={selectedImage} />
      </div>
      <input type="file" accept="image/*" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
      {selectedImage && (
        <button className={styles.deleteBtn} onClick={handleDeleteButtonClick}>
          <FaTrashAlt />
        </button>
      )}
    </div>
  );
}
