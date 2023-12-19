import styles from "./PosterDetail.module.css";
import { BiCalendar } from "react-icons/bi";
import { BiMaleFemale } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";

const PosterDetail = ({ day, schedule, userInfo }) => {
  // user에는 20대 여성 days에는 여행 일 수 , 시작 날짜, 끝날 날짜
  const startDate = new Date(schedule.startDate);
  const startMonth = startDate.getMonth() + 1;
  const startDay = startDate.getDate();

  const endDate = new Date(schedule.endDate);
  const endMonth = endDate.getMonth() + 1;
  const endDay = endDate.getDate();

  const milliseconds = endDate - startDate;
  const travleDay = Math.round(milliseconds / (24 * 60 * 60 * 1000)) + 1; // 당일치기 일수도 있으니 + 1일 , 밀리세컨드 단위를 날짜로 변환

  return (
    <div className={styles.infoBox}>
      <div className={styles.items}>
        <BiAlarm className={styles.icon} />
        {travleDay}일
      </div>
      <div className={styles.items}>
        <BiCalendar className={styles.icon} />
        {startMonth + "/" + startDay}~ {endMonth + "/" + endDay}
      </div>
      <div className={styles.items}>
        <BiMaleFemale className={styles.icon} />
        {userInfo.ageRange + " " + userInfo.gender}
      </div>
    </div>
  );
};

export default PosterDetail;
