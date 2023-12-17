import React, { useState, useEffect } from "react";
import styles from "./HeadcountSelect.module.css";

function HeadcountSelect({ handleData }) {
  const [selectedHead, setSelectedHead] = useState(""); //선택된 인원
  const [isHeadDropdown, setIsHeadDropdown] = useState(false); //인원 드롭다운

  //인원 목록
  const headCounts = ["1명", "2명", "3명", "4명", "5명", "5명이상"];

  //인원 드롭다운 토글 함수
  const toggleHeadDropdown = () => {
    setIsHeadDropdown(!isHeadDropdown);
  };

  //인원 클릭 시 실행되는 함수
  const handleHeadSelect = (headCounts) => {
    setSelectedHead(headCounts); //선택된 인원 변경
    setIsHeadDropdown(false); //드롭다운 닫기
    handleData({ selectedHead: headCounts }); //데이터 부모 컴포넌트로 전달
  };

  //다른데 클릭하면 드롭다운 닫히는 이벤트 설정
  useEffect(() => {
    const closeDropdowns = (event) => {
      if (!event.target.closest(`.${styles.headContainer}`) && isHeadDropdown) {
        setIsHeadDropdown(false);
      }
    };

    document.addEventListener("mousedown", closeDropdowns);

    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
    };
  }, [isHeadDropdown]);

  //선택된 항목 제외한 인원 목록 필터링
  const availableCounts = headCounts.filter(
    (headCounts) => headCounts !== selectedHead
  );

  return (
    <div className={styles.container}>
      <h3>인원</h3>
      <div className={styles.headContainer}>
        <button onClick={toggleHeadDropdown} className={styles.button}>
          {selectedHead || "인원 선택"}
        </button>
        {isHeadDropdown && (
          <div className={styles.headDropdown}>
            {availableCounts.map((headCounts) => (
              <button
                key={headCounts}
                onClick={() => handleHeadSelect(headCounts)}
                className={styles.button}
              >
                {headCounts}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HeadcountSelect;
