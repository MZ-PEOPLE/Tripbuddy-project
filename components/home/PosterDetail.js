import styles from "./PosterDetail.module.css";
import { BiCalendar } from "react-icons/bi";
import { BiMaleFemale } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";

const PosterDetail = ({ day, schedule, userInfo }) => {
  // user에는 20대 여성 days에는 여행 일 수 , 시작 날짜, 끝날 날짜

  return (
    <div className={styles.infoBox}>
      <div className={styles.items}>
        <BiAlarm className={styles.icon} />
        {day}일
      </div>
      <div className={styles.items}>
        <BiCalendar className={styles.icon} />
        {schedule.start} ~ {schedule.end}
      </div>
      <div className={styles.items}>
        <BiMaleFemale className={styles.icon} />
        {userInfo}
      </div>
    </div>
  );
};

export default PosterDetail;
