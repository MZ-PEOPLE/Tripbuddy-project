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
import { useRouter } from "next/router";

const buttonList = [
  { id: "content", button_name: "내용" },
  { id: "location", button_name: "위치" },
];

const textCotentId = "content";
const locationId = "location";

const Detail = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  const [postImg, setPostImg] = useState(null);
  const [contents, setContents] = useState(null);
  const [postProps, setPostProps] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState(null);

  const [selectedButton, setSelectedButton] = useState("내용");
  const [ContentId, setContentId] = useState(0);
  const [mainContent, setMainContent] = useState(0);

  useEffect(() => {
    // 역겨운 나의 쓰레기코드
    if (id) {
      const fetchPost = async () => {
        setIsLoading(true);

        try {
          const response = await fetch(`/api/getPostDetail/${id}`);
          if (!response.ok) {
            throw new Error("요청실패함");
          }
          const poster = await response.json(); // 글을 쓴 저자와 게시글 내부 정보를 모두 불러옴

          // 날짜가 들어갈곳에 알맞게 가공함
          const startDate = new Date(poster.post.dateSelectData.startDate);
          const startYear = startDate.getFullYear();
          const startMonth = (startDate.getMonth() + 1).toString().padStart(2, "0");
          const startDay = startDate.getDate().toString().padStart(2, "0");

          const endDate = new Date(poster.post.dateSelectData.endDate);
          const endYear = endDate.getFullYear();
          const endMonth = (endDate.getMonth() + 1).toString().padStart(2, "0");
          const endDay = endDate.getDate().toString().padStart(2, "0");

          setPostImg(poster.post.imagePaths); // 이미지를 담음
          console.log(poster);
          setPostProps({
            // 글 내용에 들어가야할 값들을 형식에 맞게 담아줌 , 나중에 아랫부분 다 수정해야함
            numberOfPeople: poster.post.headSelectData.headCounts,
            like: 0,
            location: poster.post.location.name,
            title: poster.post.title,
            username: poster.writer.name,
            userImg: poster.writer.profileImage,
            timeStemp: `${startYear}.${startMonth}.${startDay} - ${endYear}.${endMonth}.${endDay}`,
          });
          setContents({
            // 메인 컨텐츠 영역을 담아줌
            content: {
              text: poster.post.content,
            },
            location: { longitude: poster.post.location.longitude, latitude: poster.post.location.latitude },
          });
          setContentId(textCotentId);
        } catch (err) {
          setPageError(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]); // id가 변경될 때마다 이 effect가 실행됩니다.

  const handleButtonClick = (e) => {
    setSelectedButton(e.button_name);
    setContentId(e.id);
  };

  useEffect(() => {
    // 다른 버튼을 눌렀을때 해당하는 컨텐츠를 불러옴
    if (ContentId === textCotentId) {
      setMainContent(contents[ContentId]);
    }
    if (ContentId === locationId) {
      setMainContent(contents[ContentId]);
    }
  }, [ContentId]);

  if (pageError) {
    // 이 페이지에서 요청하는 페이지가 없을때 처리해야할 것들이 담겨야함
    router.push("/");
    console.log("요청하는 페이지가 없거나 에러사항있음", pageError);
    return null;
  }

  if (!isLoading) {
    return (
      <>
        <Topbar
          leftContent={<BackBtn />}
          middleContent={<Logo />}
          rightContent={<LoginCheck isLogin={user ? true : false} />}
        />
        <ImageSlider imgs={postImg} />
        <UserPostInfo items={postProps} />
        <ContentNavbar buttonList={buttonList} selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <ContentBox items={mainContent} />
        <TravelChatBtn />
        <FooterBar profileImage={user ? user.profileImage : null} />
      </>
    );
  }
};

export default Detail;
