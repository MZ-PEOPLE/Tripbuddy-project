import React, { useEffect, useState } from "react";
import ImageSlider from "@/components/postDetail/ImageSlider";
import UserPostInfo from "@/components/postDetail/UserPostInfo";
import ContentNavbar from "@/components/postDetail/ContentNavbar";
import ContentBox from "@/components/postDetail/ContentBox";
import TravelChatBtn from "@/components/postDetail/TravelChatBtn";
import Topbar from "@/components/topbar/TopBar";
import BackBtn from "@/components/topbar/BackButton";
import Logo from "@/components/topbar/Logo";
import LoginCheck from "@/components/topbar/LoginCheck";
import FooterBar from "@/components/footerbar/FooterBar";

const Slick = () => {
  const [selectedButton, setSelectedButton] = useState("내용");
  const [ContentId, setContentId] = useState(0);
  const [mainContent, setMainContent] = useState(0);

  const textCotentId = 0;
  const locationId = 1;

  // 더미 데이터 좌표 구글 맵을 통해 위치를 보여줄것
  const Contents = {
    0: {
      text: "제주도 가실분? \n제주도 가실분? \n제주도 가실분? \n제주도 가실분? \n제주도 가실분? \n제주도 가실분? \n제주도 가실분? \n제주도 가실분? \n제주도 가실분? \n제주도 가실분? \n제주도 가실분? \n",
    },
    1: { location: { mapX: 125, mapY: 26 } },
  };

  // 더미 데이터
  const buttonList = [
    { id: 0, button_name: "내용" },
    { id: 1, button_name: "위치" },
  ];

  // 더미 데이터 이미지슬라이드 기능을 위해 링크를 던져줌 굳이 키값 지정할필요없이 arraylist로 문자열 여러개 묶어 던져줘도 될듯
  const imgs = [
    { src: "img/trav.png" },
    { src: "img/trav1.png" },
    { src: "img/trav2.png" },
    { src: "img/profile_test.png" },
  ];

  // 더미 데이터 유저가 글에 쓴 디테일 정보들이 들어있음
  const postProps = {
    numberOfPeople: 5,
    like: 22,
    location: "제주도 서귀포 동흥동",
    title: "제주도 놀러가실분?",
    username: "왈왈치왈",
    userImg: "/img/profile_test.png",
    timeStemp: "2024.02.08 ~ 2024.02.11",
  };

  const handleButtonClick = (e) => {
    setSelectedButton(e.button_name);
    setContentId(e.id);
  };

  useEffect(() => {
    // 다른 버튼을 눌렀을때 해당하는 컨텐츠를 불러옴
    if (ContentId === textCotentId) {
      setMainContent(Contents[ContentId]);
    }
    if (ContentId === locationId) {
      setMainContent(Contents[ContentId]);
    }
  }, [ContentId]);

  return (
    <div>
      <Topbar leftContent={<BackBtn />} middleContent={<Logo />} rightContent={<LoginCheck />} />
      <ImageSlider imgs={imgs} />
      <UserPostInfo items={postProps} />
      <ContentNavbar
        buttonList={buttonList}
        selectedButton={selectedButton}
        onButtonClick={handleButtonClick}
      />
      <ContentBox items={mainContent} />
      <TravelChatBtn />
      <FooterBar />
    </div>
  );
};

export default Slick;
