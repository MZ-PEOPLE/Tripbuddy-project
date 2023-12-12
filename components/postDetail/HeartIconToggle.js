import styles from "./HeartIconToggle.module.css";
import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const HeartIconToggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  // 아이콘이 클릭될 때 호출되는 함수
  const handleClick = () => {
    // 상태를 토글 (이전 상태의 반대 값으로 설정)
    setIsClicked(!isClicked)
  };

  return (
    <>
      {isClicked ?
        (<FaRegHeart
          className={`${styles.post_iconSize}`}
          onClick={handleClick}
        />
        ) :
        (<FaHeart
          className={`${styles.post_iconSize} ${styles.post_heart_icon}`}
          onClick={handleClick}
        />)}
      {/* 클릭된 경우:  하트 아이콘, 클릭되지 않은 경우: 빈 하트 아이콘 */}
    </>
  );
};

export default HeartIconToggle;