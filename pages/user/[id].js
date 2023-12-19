import MyPageProfileDetail from "@/components/MyPage/UserProfileDetail";
import MyPageUserTapBar from "@/components/MyPage/UserTapBar";
import FooterBar from "@/components/footerbar/FooterBar";
import LoginCheck from "@/components/topbar/LoginCheck";
import BackBtn from "@/components/topbar/BackButton";
import Topbar from "@/components/topbar/TopBar";
import { useEffect, useState } from "react";

export default function MyPageContainer({ user }) {
  const myProfile = false;
  const [userError, setUserError] = useState(false);
  const [opponentUser, setOpponentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUrl = window.location.href;
      const urlSegments = currentUrl.split("/");
      const lastSegment = urlSegments[urlSegments.length - 1];
      const response = await fetch(`/api/user/${lastSegment}`);
      const poster = await response.json();
      if (!response.ok) {
        setUserError(true);
      }
      setOpponentUser(poster);
    };

    fetchUser();
  }, []);

  if (userError) {
    return (
      <>
        <Topbar
          leftContent={<BackBtn />}
          middleContent={"존재하지 않는 사용자"}
          rightContent={<LoginCheck isLogin={user ? true : false} />}
        />
        <FooterBar profileImage={user ? user.profileImage : null} />
      </>
    );
  }

  if (opponentUser) {
    return (
      <>
        <Topbar
          leftContent={<BackBtn />}
          middleContent={opponentUser.name + "님의 마이페이지"}
          rightContent={<LoginCheck isLogin={user ? true : false} />}
        />
        <MyPageProfileDetail user={opponentUser} myProfile={myProfile} />
        <MyPageUserTapBar userid={opponentUser.id} />
        <FooterBar profileImage={user ? user.profileImage : null} />
      </>
    );
  }
}
