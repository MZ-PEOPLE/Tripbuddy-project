import styles from "./ProfileUpdate.module.css";
import ImgUpdateBtn from "./ImgUpdateBtn";
import IdUpdate from "./IdUpdate";
import IntroUpdate from "./IntroUpdate";
import SnsLogin from "./snsLogin";
import Submit from "./Submit";
import { useState } from "react";

export default function ProfileUpdate({ user }) {
  const [newId, setNewId] = useState(user.name);
  const [newIntro, setNewIntro] = useState(user.about);

  const handleIdUpdate = (id) => {
    setNewId(id);
  };

  const handleIntroUpdate = (intro) => {
    setNewIntro(intro);
  };

  return (
    <div className={styles.container}>
      <div className={styles.userId}>
        {" "}
        {/*프로필사진,아이디*/}
        <div className={styles.frame}>
          <ImgUpdateBtn profileImage={user.profileImage} />
          <IdUpdate userName={newId} onUpdate={handleIdUpdate} />
        </div>
        <IntroUpdate userIntro={newIntro} onUpdate={handleIntroUpdate} />
        <SnsLogin />
        <Submit newId={newId} newIntro={newIntro} />
      </div>
    </div>
  );
}
