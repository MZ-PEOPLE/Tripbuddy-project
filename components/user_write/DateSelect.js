import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateSelect.module.css";

function DateSelect({ handleData }) {
  //시작일, 종료일 상태값 설정
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  //시작일 변경 시 실행되는 함수
  const handleStartDateChange = (date) => {
    setStartDate(date); //시작일 변경
    if (endDate < date) {
      setEndDate(null); //선택한 종료일 -> 시작일보다 이전일 되면 종료일 초기화
    }
    handleData({ asd: { startDate: date, endDate } }); //부모 컴포넌트로 데이터 전달
  };

  //종료일 변경 시 실행되는 함수
  const handleEndDateChange = (date) => {
    if (date >= startDate) {
      setEndDate(date); //종료일 변경
      handleData({ asd: { startDate, endDate: date } }); //부모 컴포넌트로 데이터 전달
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <label htmlFor="departureDate">출발하는 날</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy년 MM월 dd일"
          className={styles.myDatePicker}
          calendarClassName={styles.datePickerCalendar}
        />
      </div>
      <div className={styles.dateContainer}>
        <label htmlFor="departureDate">도착하는 날</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="yyyy년 MM월 dd일"
          className={styles.myDatePicker}
          calendarClassName={styles.datePickerCalendar}
        />
      </div>
    </div>
  );
}

export default DateSelect;
