import MyPageProfileDetail from "@/components/MyPage/UserProfileDetail";
import MyPageUserTapBar from "@/components/MyPage/UserTapBar";
import BackBtn from "@/components/topbar/BackButton";
import LoginCheck from "@/components/topbar/LoginCheck";
import Topbar from "@/components/topbar/TopBar";
import { useRouter } from "next/router";

export default function MyPageContainer({ user }) {
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
        middleContent={user.name}
        rightContent={<LoginCheck isLogin={user ? true : false} />}
      />
      <MyPageProfileDetail user={user} />
      <MyPageUserTapBar userid={user.id} />
    </>
  );
}
