import ChatListComponent from "@/components/chat/ChatList";
import NavBar from "@/components/topbar/TopBar";
import BackBtn from "@/components/topbar/BackButton";
import ChatName from "@/components/chatroom/ChatName";
import FooterBar from "@/components/footerbar/FooterBar";

export default function ChatList() {
    return (
        <>
            <NavBar
                leftContent={<BackBtn />}
                middleContent={<ChatName />}
            />
            <ChatListComponent />
            <FooterBar />
        </>
    )
}