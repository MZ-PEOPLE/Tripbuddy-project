import NavBar from "@/components/topbar/TopBar";
import BackBtn from "@/components/topbar/BackButton";
import LoginCheck from "@/components/topbar/LoginCheck";
import Logo from "@/components/topbar/Logo";
import FooterBar from "@/components/footerbar/FooterBar";

export default function Home() {
  return (
    <>
      <NavBar
        leftContent={<BackBtn />}
        middleContent={<Logo />}
        rightContent={<LoginCheck />}
      />
      <FooterBar />
    </>
  );
}
