import BackBtn from "@/components/topbar/BackButton";
import LoginCheck from "@/components/topbar/LoginCheck";
import Logo from "@/components/topbar/Logo";
import FooterBar from "@/components/footerbar/FooterBar";
import UserPoster from "@/components/home/UserPoster";
import Topbar from "@/components/topbar/TopBar";
import styles from "@/components/home/index.module.css";

export default function Home({ user }) {
  return (
    <>
      <div className={styles.container}>
        <Topbar
          leftContent={<BackBtn />}
          middleContent={<Logo />}
          rightContent={<LoginCheck isLogin={user ? true : false} />}
          searchBar={true}
        />
        <UserPoster />
        <FooterBar profileImage={user ? user.profileImage : null} />
      </div>
    </>
  );
}
