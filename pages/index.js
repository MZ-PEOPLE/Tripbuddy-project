import BackBtn from "@/components/topbar/BackButton";
import LoginCheck from "@/components/topbar/LoginCheck";
import Logo from "@/components/topbar/Logo";
import FooterBar from "@/components/footerbar/FooterBar";
import UserPoster from "@/components/home/UserPoster";
import Topbar from "@/components/topbar/TopBar";

export default function Home() {
  return (
    <>
      <Topbar
        leftContent={<BackBtn />}
        middleContent={<Logo />}
        rightContent={<LoginCheck />}
        searchBar={true}
      />
      <UserPoster />
      <FooterBar />
    </>
  );
}
