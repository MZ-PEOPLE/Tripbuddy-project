import MyPageProfileDetail from "@/components/MyPage/UserProfileDetail";
import MyPageUserTapBar from "@/components/MyPage/UserTapBar";
import MyPagePostContents from "@/components/MyPage/UserPostContents";
import MyPageTogetherContents from "@/components/MyPage/UserTogetherContents";
import MyPageUserReview from "@/components/MyPage/UserReview";

export default function MyPageContainer({ user }) {
  return (
    <>
      <MyPageProfileDetail />
      <MyPageUserTapBar />
    </>
  );
}
