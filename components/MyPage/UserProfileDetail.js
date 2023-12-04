import styles from "./UserProfileDetail.module.css";

function UserProfileDetail() {
  return (
    <div>
      <div className={styles.userProfileTopMainContainer}>
        <div className={styles.userProfileTopMain}>
          <div className={styles.userProfile}>
            <div className={styles.profilePicContainer}>
              <img
                className={styles.profilePic}
                src="https://trboard.game.onstove.com/Data/TR/20170728/19/636368659390474572.jpg"
              />
            </div>
            <div className={styles.profileInforDetail}>
              <div className={styles.profileName}>치와와와와 님</div>
              <div className={styles.profileAgeGender}>
                <div className={styles.profileAge}>20대</div>
                <div className={styles.profileGender}>중성화</div>
              </div>
            </div>
          </div>
          <div className={styles.profileDescrip}>
            왈왈왈! 왈!왈왈왈! 왈!왈왈왈! 왈!왈왈왈!
          </div>
        </div>
      </div>

      <div className={styles.profileModify}>
        <button type="button" className={styles.profileModifyButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/747/747376.png"
            alt="아이콘 자리"
            className={styles.profileModifyIcon}
          />
          <div className={styles.profileModifyText}>프로필 수정</div>
        </button>
      </div>
    </div>
  );
}

export default UserProfileDetail;
