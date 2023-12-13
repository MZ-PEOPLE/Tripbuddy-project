import styles from "./UserProfileDetail.module.css";
import { CgProfile } from "react-icons/cg";

function UserProfileDetail({ user }) {
  console.log(user, "UserProfileDetail");

  return (
    <div>
      <div className={styles.userProfileContainer}>
        <div className={styles.userProfileBox}>
          <div className={styles.userProfile}>
            <div className={styles.profilePicContainer}>
              <img className={styles.profilePic} src={user.profileImage} alt={user.name} />
            </div>
            <div className={styles.profileDetail}>
              <div className={styles.Name}>{user.name}</div>
              <div className={styles.ageGenderBox}>
                <div className={styles.ageAndGender}>
                  {user.age + "대"} {user.gender}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Descrip}>{user.about}</div>
        </div>
      </div>

      <div className={styles.profileModify}>
        <button type="button" className={styles.ModifyButton}>
          <CgProfile alt="아이콘 자리" className={styles.ModifyIcon} />
          <div className={styles.ModifyText}>프로필 수정</div>
        </button>
      </div>
    </div>
  );
}

export default UserProfileDetail;
