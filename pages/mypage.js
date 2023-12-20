import MyPageProfileDetail from "@/components/MyPage/UserProfileDetail";
import MyPageUserTapBar from "@/components/MyPage/UserTapBar";
import BackBtn from "@/components/topbar/BackButton";
import Topbar from "@/components/topbar/TopBar";
import { useRouter } from "next/router";
import FooterBar from "@/components/footerbar/FooterBar";
import Gearbar from "@/components/topbar/Gearbar";

export default function MyPageContainer({ user }) {
  const router = useRouter();
  if (!user) {
    // 사용자 정보가 없으면 렌더링 x , 로그인 페이지로 이동
    router.push("/login");
    return null;
  }
  return (
    <>
      <Topbar leftContent={<BackBtn />} middleContent={user.name + "님의 마이페이지"} rightContent={<Gearbar />} />
      <MyPageProfileDetail user={user} />
      <MyPageUserTapBar userid={user.id} />
      <FooterBar profileImage={user ? user.profileImage : null} />
    </>
  );
}
