import NavBar from "@/components/TopBar";
import BackBtn from "@/components/BackButton";
import LoginCheck from "@/components/LoginCheck";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <>
      <NavBar leftContent={<BackBtn />} middleContent={<Logo />} rightContent={<LoginCheck />} />
    </>
  );
}
