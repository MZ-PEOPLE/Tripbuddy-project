import styles from "./ProfileUpdate.module.css";
import ImgUpdateBtn from "./ImgUpdateBtn";
import IdUpdate from "./IdUpdate";
import IntroUpdate from "./IntroUpdate";
import SnsLogin from "./snsLogin";

export default function ProfileUpdate({ user }) {
  return (
    <div className={styles.container}>
      <div className={styles.userId}>
        {" "}
        {/*프로필사진,아이디*/}
        <div className={styles.frame}>
          <ImgUpdateBtn profileImage={user.profileImage} />
          <IdUpdate userName={user.name} />
        </div>
        <IntroUpdate userIntro={user.about} />
        <SnsLogin />
      </div>
    </div>
  );
}
