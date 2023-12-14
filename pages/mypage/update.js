import ProfileUpdate from "@/components/mypageUpdate/ProfileUpdate";
import BackBtn from "@/components/topbar/BackButton";
import LoginCheck from "@/components/topbar/LoginCheck";
import Topbar from "@/components/topbar/TopBar";
import FooterBar from "@/components/footerbar/FooterBar";
import { useRouter } from "next/router";

export default function MypageUpdate({ user }) {
  const router = useRouter();
  if (!user) {
    // 사용자 정보가 없으면 렌더링 x , 로그인 페이지로 이동
    router.push("/login");
    return null;
  }
  return (
    <>
      <Topbar
        leftContent={<BackBtn />}
        middleContent={"마이페이지 수정"}
        rightContent={<LoginCheck isLogin={user ? true : false} />}
      />
      <ProfileUpdate />
      <FooterBar />
    </>
  )
}