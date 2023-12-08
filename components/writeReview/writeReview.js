import { useState } from "react";
import styles from "./writeReview.module.css";
import StarRating from "./StarRating";

export default function WriteReview() {
  const [userDatas, setUserDatas] = useState([
    {
      user_name: "치와와와",
      user_pic:
        "https://images.mypetlife.co.kr/content/uploads/2017/12/09161406/KakaoTalk_20171227_133552701.jpg",
    },
    {
      user_name: "치왈왈왈",
      user_pic: "https://i.ytimg.com/vi/02rMn4giIUs/maxresdefault.jpg",
    },
    {
      user_name: "시바시바",
      user_pic:
        "https://dimg.donga.com/wps/ECONOMY/IMAGE/2017/11/15/87280400.2.jpg",
    },
    {
      user_name: "구구구구",
      user_pic:
        "https://opgg-com-image.akamaized.net/attach/images/20200422122143.1172091.jpg",
    },
  ]);

  const [ratings, setRatings] = useState(Array(userDatas.length).fill(0));
  const [isWriteReviewVisible, setWriteReviewVisible] = useState(
    Array(userDatas.length).fill(false)
  );

  const handleRatingChange = (index, rating) => {
    let newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);

    let newVisibility = [...isWriteReviewVisible];
    newVisibility[index] = true;
    setWriteReviewVisible(newVisibility);
  };

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewBox}>
        {userDatas.map((userData, index) => (
          <div key={index} className={styles.userReview}>
            <div className={styles.userInfoBox}>
              <div>
                <img
                  src={userData.user_pic}
                  alt={userData.user_name}
                  className={styles.profilePic}
                />
              </div>
              <div className={styles.nameStarBox}>
                <div>{userData.user_name}님</div>
                <StarRating
                  rating={ratings[index]}
                  onRatingChange={(rating) => handleRatingChange(index, rating)}
                />
              </div>
            </div>
            {isWriteReviewVisible[index] && (
              <div className={styles.writeReviewBox}>
                <input
                  type="text"
                  placeholder="20자 이내로 입력해주세요."
                  maxLength="20"
                  className={styles.reviewText}
                />
              </div>
            )}
          </div>
        ))}
        <div className={styles.okBox}>
          <button className={styles.okButton}>확인</button>
        </div>
      </div>
    </div>
  );
}
