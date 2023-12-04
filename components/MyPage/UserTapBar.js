import styles from "./UserTapBar.module.css";
import UserPostContents from "./UserPostContents.js";
import UserTogetherContents from "./UserTogetherContents.js";
import UserReview from "./UserReview.js";
import React, { useState } from "react";

function UserTapBar() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    console.log(tabNumber);
    setActiveTab(tabNumber);
  };

  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.userProfile}>
        <div className={styles.Buttons}>
          <button
            className={`${styles.PostButton} ${
              activeTab === 1 ? styles.activeTab : styles.tapFalse
            }`}
            onClick={() => handleTabChange(1)}
          >
            게시물
          </button>{" "}
          <button
            className={`${styles.TogetherButton} ${
              activeTab === 2 ? styles.activeTab : styles.tapFalse
            }`}
            onClick={() => handleTabChange(2)}
          >
            동행
          </button>
          <button
            className={`${styles.TripReviewButton} ${
              activeTab === 3 ? styles.activeTab : styles.tapFalse
            }`}
            onClick={() => handleTabChange(3)}
          >
            여행 후기
          </button>{" "}
        </div>
      </div>
      <div className={styles.contentContainer}>
        {activeTab === 1 && <UserPostContents />}
        {activeTab === 2 && <UserTogetherContents />}
        {activeTab === 3 && <UserReview />}
      </div>
    </div>
  );
}

export default UserTapBar;
