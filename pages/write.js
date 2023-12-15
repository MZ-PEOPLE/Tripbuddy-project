import React, { useState } from "react";
import { useRouter } from "next/router";
import DateSelect from "../components/user_write/DateSelect";
import GenderAgeSelect from "../components/user_write/GenderAgeSelect";
import Navbar from "../components/topbar/TopBar";
import FooterBar from "../components/footerbar/FooterBar";
import BackBtn from "@/components/topbar/BackButton";
import Logo from "@/components/topbar/Logo";
import LoginCheck from "@/components/topbar/LoginCheck";
import TravelMap from "@/components/user_write/TravelMap";
import styles from "../components/user_write/write.module.css";
import { FaCamera, FaRegTrashAlt, FaMapMarker } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";

export default function Write() {
  const [title, setTitle] = useState(""); //글제목
  const [content, setContent] = useState(""); //글내용
  const [selectedFiles, setSelectedFiles] = useState([]); //선택된 이미지파일 목록
  const [startDate, setStartDate] = useState(null); //여행 시작 날짜
  const [endDate, setEndDate] = useState(null); //여행 종료 날짜
  const [gender, setGender] = useState(""); //성별
  const [ageRange, setAgeRange] = useState(""); //나이대
  const [travelMapData, setTravelMapData] = useState(null); //여행지도 데이터
  const router = useRouter(); //라우터 인스턴스
  //입력된 제목 처리 함수
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  //입력된 내용 처리 함수
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  //이미지 업로드 함수
  const handleImageUpload = (e) => {
    const files = e.target.files;
    let fileArray = [...selectedFiles];
    for (let i = 0; i < files.length; i++) {
      const currentFileUrl = URL.createObjectURL(files[i]);
      fileArray.push(currentFileUrl);
    }
    if (fileArray.length > 10) {
      fileArray = fileArray.slice(0, 10);
    }
    setSelectedFiles(fileArray);
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
  //글 작성 후 서버로 전송 함수
  const handleSubmit = () => {
    const postData = {
      title: title,
      content: content,
      image: selectedFiles,
      dateSelectData: { startDate: startDate, endDate: endDate },
      genderAgeSelectData: { gender: gender, ageRange: ageRange },
      travelMapData: travelMapData,
    };
    console.log("등록된 정보:", postData);
    //~~최종 글서버전송
    router.push("/"); //전송 후 메인페이지로 이동
  };
  return (
    <>
      <Navbar
        leftContent={<BackBtn />}
        middleContent={<Logo />}
        rightContent={<LoginCheck />}
      />
      <div className={styles.writeContainer}>
        <div className={styles.writeTitle}>게시글 작성</div>
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
            placeholder="자신과 맞는 동행자를 쉽게 찾기위해 mbti,여행목적 등을 작성해주시면 좋아요!"
            value={content}
            onChange={handleContentChange}
            className={styles.textareaField}
          ></textarea>
        </div>
        <div className={styles.addPicture}>
          <label
            htmlFor="input-file"
            className={styles.addButton}
            onChange={handleImageUpload}
          >
            <input
              type="file"
              id="input-file"
              multiple
              className={styles.addButton}
            />
          </label>
          {selectedFiles.map((image, id) => (
            <div className={styles.imageContainer} key={id}>
              <img src={image} alt={`${image}-${id}`} />
              <FaRegTrashAlt onClick={() => handleImageDelete(id)} />
            </div>
          ))}
        </div>
        <h1 className={styles.writeTitle}><FaMapMarker className={styles.mapIcon} />어디로 여행가시나요?</h1>
        <TravelMap />
        <h2 className={styles.writeTitle}><MdDateRange className={styles.dateIcon} />언제 여행가시나요?</h2>
        <div className={styles.selectBox}>
          <DateSelect handleData={handleDataSelection} dataType="date" />
        </div>
        <h2 className={styles.writeTitle}><IoIosPerson className={styles.infoIcon} />성별과 나이는?</h2>
        <div className={styles.selectBox}>
          <GenderAgeSelect
            handleData={handleGenderAgeData}
            dataType="genderAge"
          />
        </div>
        <div className={styles.buttonBox}>
          <button onClick={handleSubmit} className={styles.submitButton}>
            글 등록
          </button>
        </div>
      </div >
      <FooterBar />
    </>
  );
}