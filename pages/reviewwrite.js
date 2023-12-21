import Review from "@/components/writeReview/writeReview";
import Topbar from "@/components/topbar/TopBar";
import BackBtn from "@/components/topbar/BackButton";
import FooterBar from "@/components/footerbar/FooterBar";
import LoginCheck from "@/components/topbar/LoginCheck";

export default function writeReview({ user }) {
  return (
    <>
      <Topbar
        leftContent={<BackBtn />}
        middleContent={"여행 리뷰 작성 (실험실)"}
        rightContent={<LoginCheck isLogin={user ? true : false} />}
      />
      <Review />
      <FooterBar profileImage={user ? user.profileImage : null} />
    </>
  );
}
