import NavBar from "@/components/topbar/TopBar";
import BackBtn from "@/components/topbar/BackButton";
import LoginCheck from "@/components/topbar/LoginCheck";
import Logo from "@/components/topbar/logo";

export default function Home() {
  return (
    <>
      <NavBar leftContent={<BackBtn />} middleContent={<Logo />} rightContent={<LoginCheck />} />
    </>
  );
}
