import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DateSelect from "../components/user_write/DateSelect";
import GenderAgeSelect from "../components/user_write/GenderAgeSelect";
import HeadcountSelect from "@/components/user_write/HeadcountSelect";
import Navbar from "../components/topbar/TopBar";
import FooterBar from "../components/footerbar/FooterBar";
import BackBtn from "@/components/topbar/BackButton";
import Logo from "@/components/topbar/Logo";
import LoginCheck from "@/components/topbar/LoginCheck";
import TravelMap from "@/components/user_write/TravelMap";
import styles from "../components/user_write/write.module.css";
import { FaCamera, FaRegTrashAlt } from "react-icons/fa";

export default function Write({ user }) {
  const [title, setTitle] = useState(""); //글제목
  const [content, setContent] = useState(""); //글내용
  const [selectedFiles, setSelectedFiles] = useState([]); //선택된 이미지파일 목록
  const [startDate, setStartDate] = useState(null); //여행 시작 날짜
  const [endDate, setEndDate] = useState(null); //여행 종료 날짜
  const [headCounts, setHeadCounts] = useState(""); //인원수
  const [gender, setGender] = useState(""); //성별
  const [ageRange, setAgeRange] = useState(""); //나이대
  const [travelMapData, setTravelMapData] = useState(null); //여행지도 데이터
  const router = useRouter(); //라우터 인스턴스

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  //입력된 제목 처리 함수
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  //입력된 내용 처리 함수
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;

    try {
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      const response = await fetch("/api/uploadImages", {
        method: "POST",
        body: formData,
      });

      console.log("이미지 업로드 응답:", response);

      if (response.ok) {
        const data = await response.json();
        console.log("서버응답:", data);
        const uploadedImagePaths = data.imagePaths;
        console.log("이미지 업로드 성공:", uploadedImagePaths);

        // 이미지 경로를 useState를 통해 업데이트
        setSelectedFiles(uploadedImagePaths);
      } else {
        console.error("이미지 업로드 실패");
      }
    } catch (error) {
      console.error("이미지 업로드 중 에러:", error);
    }
  };

  //선택된 이미지 삭제 함수
  const handleImageDelete = (id) => {
    setSelectedFiles(selectedFiles.filter((_, index) => index !== id));
  };

  //날짜 선택 컴포넌트(DateSelect)에서 선택된 날짜 처리 함수
  const handleDataSelection = (date_data) => {
    if (date_data && date_data.asd) {
      //DateSelect 컴포넌트에서 보낸 startDate, endDate 받아오기
      setStartDate(date_data.asd.startDate);
      setEndDate(date_data.asd.endDate);
    }
  };

  //성별, 나이대 선택 컴포넌트에서 선택된 데이터 처리 함수
  const handleGenderAgeData = ({ selectedGender, selectedAgeRange }) => {
    setGender(selectedGender);
    setAgeRange(selectedAgeRange);
  };

  const handleHeadData = ({ selectedHead }) => {
    setHeadCounts(selectedHead);
  };

  const handleSubmit = async () => {
    try {
      const textData = {
        title,
        content,
        dateSelectData: { startDate, endDate },
        genderAgeSelectData: { gender, ageRange },
        headSelectData: { headCounts },
        imagePaths: selectedFiles, // 이미지 경로 추가
      };

      console.log("전송할 텍스트 데이터:", textData);

      const response = await fetch("/api/writeInput", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(textData),
      });

      if (response.ok) {
        console.log("텍스트 데이터 전송 완료");
        router.push("/"); // 텍스트 데이터 전송 완료 후 홈 페이지로 이동
      } else {
        console.error("텍스트 데이터 전송 실패");
        alert("글 작성 오류 발생");
      }
    } catch (error) {
      console.error("글 작성 오류", error);
      alert("글 작성 오류 발생");
    }
  };

  // 버튼 클릭 시 handleSubmit 함수 호출
  const handleButtonClick = () => {
    handleSubmit();
  };

  return (
    <>
      <Navbar
        leftContent={<BackBtn />}
        middleContent={<Logo />}
        rightContent={<LoginCheck isLogin={user ? true : false} />}
      />
      <div className={styles.writeContainer}>
        <h2 className={styles.writeTitle}>글 작성</h2>
        <div>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={handleTitleChange}
            className={styles.inputField}
          />
        </div>
        <div>
          <textarea
            placeholder="글쓰기"
            value={content}
            onChange={handleContentChange}
            className={styles.textareaField}
          ></textarea>
        </div>

        <div className={styles.addPicture}>
          <label htmlFor="input-file" className={styles.addButton}>
            <input
              type="file"
              id="input-file"
              multiple
              className={styles.addButton}
              onChange={handleImageUpload}
            />
          </label>

          {selectedFiles.map((image, id) => (
            <div className={styles.imageContainer} key={id}>
              <img src={image} alt={`${image}-${id}`} />
              <FaRegTrashAlt onClick={() => handleImageDelete(id)} />
            </div>
          ))}
        </div>

        <h2 className={styles.writeTitle}>어디로 여행가시나요?</h2>
        <TravelMap />

        <h2 className={styles.writeTitle}>언제 여행가시나요?</h2>
        <div className={styles.selectBox}>
          <DateSelect handleData={handleDataSelection} dataType="date" />
        </div>

        <h2 className={styles.writeTitle}>몇명?</h2>
        <div className={styles.selectBox}>
          <HeadcountSelect handleData={handleHeadData} dataType="headCounts" />
        </div>
        <h2 className={styles.writeTitle}>성별과 나이는?</h2>
        <div className={styles.selectBox}>
          <GenderAgeSelect
            handleData={handleGenderAgeData}
            dataType="genderAge"
          />
        </div>

        <div className={styles.buttonBox}>
          <button onClick={handleButtonClick} className={styles.submitButton}>
            글 등록
          </button>
        </div>
      </div>
      <FooterBar profileImage={user ? user.profileImage : null} />
    </>
  );
}
