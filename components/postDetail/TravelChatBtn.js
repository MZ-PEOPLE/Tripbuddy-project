import styles from "./TravelChatBtn.module.css";

const TravelChatBtn = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.chatBtn}>
        <button className={styles.chatBtnStyle}>동행 채팅 참여하기</button>
        {/* 푸터 적용 후 위치교정 필요 + 임시적 하드코딩이므로 추후 환경변수에서 불러오도록 설정 */}
      </div>
    </div>
  );
};

export default TravelChatBtn;
