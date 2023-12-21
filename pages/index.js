import BackBtn from "@/components/topbar/BackButton";
import LoginCheck from "@/components/topbar/LoginCheck";
import Logo from "@/components/topbar/Logo";
import FooterBar from "@/components/footerbar/FooterBar";
import UserPoster from "@/components/home/UserPoster";
import Topbar from "@/components/topbar/TopBar";
import styles from "./index.module.css"

export default function Home({ user }) {
  return (
    <>

      <Topbar
        leftContent={<BackBtn />}
        middleContent={<Logo />}
        rightContent={<LoginCheck isLogin={user ? true : false} />}
        searchBar={true}
      />
      <div className={styles.container}>
        <UserPoster />
      </div>
      <FooterBar profileImage={user ? user.profileImage : null} />

    </>
  );
}
