import styles from "./UserPostInfo.module.css";
import { FaUserGroup } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import HeartIconToggle from "./HeartIconToggle";

/* 추후 컴포넌트 분리작업 이 필요한 것 같음
비대하진 않으나 무슨작업을 하는지 잘 모르겠음
4가지 컴포넌트로 분해후 불러오면 읽기 쉬울듯
*/
const UserPost = ({ items }) => (
  <div className={styles.user_post}>
    <div className={styles.post_info}>
      <div className={styles.post_box}>
        <div className={styles.post_iconBox}>
          <FaUserGroup className={styles.post_iconSize} />
          <span className={styles.post_info_fontSize}>{items.numberOfPeople}</span>
        </div>
        <div className={styles.post_iconBox}>
          <HeartIconToggle />
          {/* 하트를 이모티콘이 아닌 버튼으로 교체작업 필요 + 클릭 true일때 빨간하트, false일때 회색
          백엔드 작업이 되었을땐 유저가 좋아요를 눌렀는지 호출 필요 */}
          <span className={styles.post_info_fontSize}>{items.like}</span>
        </div>
      </div>
      <div className={styles.post_location}>
        <CiLocationOn className={styles.post_iconSize} />
        <span className={styles.post_info_fontSize}>{items.location}</span>
      </div>
      <div className={styles.post_title}>{items.title}</div>
      <div className={styles.userInfo}>
        <div className={styles.userImgBox}>
          <img src={items.userImg} className={styles.userImg} />
        </div>
        <div className={styles.userInfoDetail}>
          <div className={`${styles.userName} ${styles.userInfoDetailBox}`}>{items.username}</div>
          <div className={`${styles.timeStemp} ${styles.userInfoDetailBox}`}>{items.timeStemp}</div>
        </div>
      </div>
    </div>
  </div>
);

export default UserPost;
