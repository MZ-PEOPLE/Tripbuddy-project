import React from "react";
import styles from "./UserReview.module.css";

function UserReview() {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewMain}>
        <div className={styles.review}>
          <div>
            <div>닉네임</div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="평점"
              className={styles.starIcon}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="평점"
              className={styles.starIcon}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="평점"
              className={styles.starIcon}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="평점"
              className={styles.starIcon}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/5708/5708819.png"
              alt="평점"
              className={styles.starIcon}
            />
          </div>

          <div className={styles.reviewDetailContainer}>
            <div className={styles.reviewBox}>
              <div className={styles.reviewText}>
                적당히 별로~적당히 별로~적당히 별로~적당히 별로~적당히
                별로~적당히 별로~적당히 별로~적당히 별로~
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReview;
