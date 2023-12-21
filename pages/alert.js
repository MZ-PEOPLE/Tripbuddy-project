import FooterBar from "@/components/footerbar/FooterBar";
import Notifications from "@/components/notification/Notifications";
import BackBtn from "@/components/topbar/BackButton";
import Topbar from "@/components/topbar/TopBar";

export default function Alarm({ user }) {
  return (
    <>
      <Topbar leftContent={<BackBtn />} middleContent={"알림 (실험실)"} />
      <Notifications />
      <FooterBar profileImage={user ? user.profileImage : null} />
    </>
  );
}
