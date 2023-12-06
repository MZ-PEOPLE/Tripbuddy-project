import NavBar from "@/components/topbar/TopBar";
import BackBtn from "@/components/topbar/BackButton";
import ChatName from "@/components/chatroom/ChatName";
import MenuBtn from "@/components/chatroom/menu/MenuBtn";
import ChatRoomComponent from "@/components/chatroom/ChatRoom";
import InfoMsg from "@/components/chatroom/InfoMsg";
import RequestButton from "@/components/chatroom/RequestButton";
import MenuDetail from "@/components/chatroom/menu/MenuDetail";
import MyChat from "@/components/chatroom/MyChat";
import ChatBar from "@/components/chatroom/ChatBar";
import { useState } from "react";
export default function ChatRoom() {
    const [bar, setBar] = useState(false)
    return (
        <>
            <NavBar
                leftContent={<BackBtn />}
                middleContent={<ChatName />}
                rightContent={<MenuBtn setBar={setBar} bar={bar} />}
            />
            <MenuDetail bar={bar} setBar={setBar} />
            <ChatRoomComponent />
            <MyChat />
            <InfoMsg />
            <RequestButton />
            <ChatBar />
        </>
    )
}
