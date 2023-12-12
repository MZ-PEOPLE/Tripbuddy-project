import MyPageProfileDetail from "@/components/MyPage/UserProfileDetail";
import MyPageUserTapBar from "@/components/MyPage/UserTapBar";
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
      <MyPageProfileDetail user={user} />
      <MyPageUserTapBar userid={user.id} />
    </>
  );
}
