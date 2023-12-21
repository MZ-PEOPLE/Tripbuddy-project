import styles from "./UserTapBar.module.css";
import UserPostContents from "./UserPostContents.js";
import UserTogetherContents from "./UserTogetherContents.js";
import UserReview from "./UserReview.js";
import React, { useState } from "react";

function UserTapBar({ userid }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    console.log(tabNumber);
    setActiveTab(tabNumber);
  };

  return (
    <div className={styles.tapBarContainer}>
      <div className={styles.tapBarBox}>
        <div className={styles.tapButtons}>
          <button
            className={`${styles.button} ${
              activeTab === 1 ? styles.activeTab : styles.tapFalse
            }`}
            onClick={() => handleTabChange(1)}
          >
            게시물
          </button>{" "}
          <button
            className={`${styles.button} ${
              activeTab === 2 ? styles.activeTab : styles.tapFalse
            }`}
            onClick={() => handleTabChange(2)}
          >
            동행
          </button>
          <button
            className={`${styles.button} ${
              activeTab === 3 ? styles.activeTab : styles.tapFalse
            }`}
            onClick={() => handleTabChange(3)}
          >
            여행 후기
            <br />
            (실험실)
          </button>{" "}
        </div>
      </div>
      <div className={styles.contentContainer}>
        {activeTab === 1 && <UserPostContents userid={userid} />}
        {activeTab === 2 && <UserTogetherContents />}
        {activeTab === 3 && <UserReview />}
      </div>
    </div>
  );
}

export default UserTapBar;
