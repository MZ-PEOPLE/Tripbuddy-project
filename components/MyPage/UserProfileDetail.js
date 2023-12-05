import styles from "./UserProfileDetail.module.css";

function UserProfileDetail() {
  return (
    <div>
      <div className={styles.userProfileContainer}>
        <div className={styles.userProfileBox}>
          <div className={styles.userProfile}>
            <div className={styles.profilePicContainer}>
              <img
                className={styles.profilePic}
                src="https://trboard.game.onstove.com/Data/TR/20170728/19/636368659390474572.jpg"
              />
            </div>
            <div className={styles.profileDetail}>
              <div className={styles.Name}>치와와와와 님</div>
              <div className={styles.ageGenderBox}>
                <div className={styles.age}>20대</div>
                <div className={styles.gender}>중성화</div>
              </div>
            </div>
          </div>
          <div className={styles.Descrip}>
            왈왈왈! 왈!왈왈왈! 왈!왈왈왈! 왈!왈왈왈!
          </div>
        </div>
      </div>

      <div className={styles.profileModify}>
        <button type="button" className={styles.ModifyButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/747/747376.png"
            alt="아이콘 자리"
            className={styles.ModifyIcon}
          />
          <div className={styles.ModifyText}>프로필 수정</div>
        </button>
      </div>
    </div>
  );
}

export default UserProfileDetail;
