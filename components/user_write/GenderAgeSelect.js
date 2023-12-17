import React, { useState, useEffect } from "react";
import styles from "./GenderAgeSelect.module.css";

function GenderAgeSelect({ handleData }) {
  const [selectedGender, setSelectedGender] = useState(""); //선택된 성별
  const [selectedAgeRange, setSelectedAgeRange] = useState(""); //선택된 나이대
  const [isGenderDropdown, setIsGenderDropdown] = useState(false); //성별 드롭다운
  const [isAgeDropdown, setIsAgeDropdown] = useState(false); //나이대 드롭다운

  //성별과 나이대 목록
  const genders = ["여자", "남자", "성별무관"];
  const ageRanges = ["20대", "30대", "40대", "50대", "60대", "나이무관"];

  //성별 드롭다운 토글 함수
  const toggleGenderDropdown = () => {
    setIsGenderDropdown(!isGenderDropdown);
  };

  //나이대 드롭다운 토글 함수
  const toggleAgeDropdown = () => {
    setIsAgeDropdown(!isAgeDropdown);
  };

  //성별 클릭 시 실행되는 함수
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender); //선택된 성별 변경
    setIsGenderDropdown(false); //드롭다운 닫기
    handleData({ selectedGender: gender, selectedAgeRange }); //데이터 부모 컴포넌트로 전달
  };

  //나이대 선택 시 실행되는 함수
  const handleAgeSelect = (age) => {
    setSelectedAgeRange(age); //선택된 나이대 변경
    setIsAgeDropdown(false); //드롭다운 닫기
    handleData({ selectedGender, selectedAgeRange: age }); //데이터 부모 컴포넌트로 전달
  };

  //다른데 클릭하면 드롭다운 닫히는 이벤트 설정
  useEffect(() => {
    const closeDropdowns = (event) => {
      if (
        !event.target.closest(`.${styles.genderContainer}`) &&
        isGenderDropdown
      ) {
        setIsGenderDropdown(false);
      }
      if (!event.target.closest(`.${styles.ageContainer}`) && isAgeDropdown) {
        setIsAgeDropdown(false);
      }
    };

    document.addEventListener("mousedown", closeDropdowns);

    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
    };
  }, [isGenderDropdown, isAgeDropdown]);

  //선택된 항목 제외한 성별 & 나이대 목록 필터링 -> ex) '여자' 선택 시 여자 옵션 드롭다운에서 제외
  const availableGenders = genders.filter(
    (gender) => gender !== selectedGender
  );
  const availableAgeRanges = ageRanges.filter(
    (age) => age !== selectedAgeRange
  );

  return (
    <div className={styles.container}>

      <div className={styles.genderContainer}>
        <div className={styles.infoTitle}>성별</div>
        <button onClick={toggleGenderDropdown} className={styles.button}>
          {selectedGender || "성별 선택"}
        </button>
        {isGenderDropdown && (
          <div className={styles.genderDropdown}>
            {availableGenders.map((gender) => (
              <button
                key={gender}
                onClick={() => handleGenderSelect(gender)}
                className={styles.button}
              >
                {gender}
              </button>
            ))}
          </div>
        )}
      </div>


      <div className={styles.ageContainer}>
        <div className={styles.infoTitle}>나이대</div>
        <button onClick={toggleAgeDropdown} className={styles.button}>
          {selectedAgeRange || "나이대 선택"}
        </button>
        {isAgeDropdown && (
          <div className={styles.ageDropdown}>
            {availableAgeRanges.map((age) => (
              <button
                key={age}
                onClick={() => handleAgeSelect(age)}
                className={styles.button}
              >
                {age}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GenderAgeSelect;
