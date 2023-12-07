import styles from "./mypageUpdate.module.css";
import ImgUpdateBtn from "./ImgUpdateBtn";
import IdUpdate from "./IdUpdate";
import IntroUpdate from "./IntroUpdate";
import SnsLogin from "./snsLogin";

export default function ProfileUpdate() {
    return (
        <>
            <div className={styles.userId}> {/*프로필사진,아이디*/}
                <ImgUpdateBtn />
                <IdUpdate />
            </div>
            <IntroUpdate />
            <SnsLogin />
        </>
    );
}