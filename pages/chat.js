import ChatListComponent from "@/components/chat/ChatList";
import BackBtn from "@/components/topbar/BackButton";
import LoginCheck from "@/components/topbar/LoginCheck";
import Topbar from "@/components/topbar/TopBar";
import FooterBar from "@/components/footerbar/FooterBar";
export default function ChatList({ user }) {
  return (
    <>
      <Topbar
        leftContent={<BackBtn />}
        middleContent={"채팅"}
        rightContent={<LoginCheck isLogin={user ? true : false} />}
      />
      <ChatListComponent />
      <FooterBar />
    </>
  )

}
