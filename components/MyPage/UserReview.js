import React from "react";
import styles from "./UserReview.module.css";

function UserReview() {
  return (
    <div className={styles.TripReviewContainer}>
      <div className={styles.TripReviewContainer2}>
        <div className={styles.TripReview}>
          <div>
            <div>닉네임</div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="평점"
              className={styles.TripReviewIcon}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="평점"
              className={styles.TripReviewIcon}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="평점"
              className={styles.TripReviewIcon}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="평점"
              className={styles.TripReviewIcon}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/5708/5708819.png"
              alt="평점"
              className={styles.TripReviewIcon}
            />
          </div>

          <div className={styles.TripReviewDetailContainer}>
            <div className={styles.TripReviewBox}>
              <div className={styles.TripReviewText}>
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
