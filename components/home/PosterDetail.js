import styles from "./PosterDetail.module.css";

const PosterDetail = ({ day, schedule, userInfo }) => {
  // user에는 20대 여성 days에는 여행 일 수 , 시작 날짜, 끝날 날짜

  return (
    <div className={styles.infoBox}>
      <div className={styles.items}>{day}일</div>
      <div className={styles.items}>
        {schedule.start} ~ {schedule.end}
      </div>
      <div className={styles.items}>{userInfo}</div>
    </div>
  );
};

export default PosterDetail;
