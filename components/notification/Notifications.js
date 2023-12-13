import React, { useState, useEffect } from "react";
import styles from "./Notifications.module.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // 가짜 API 호출
    const fetchNotifications = async () => {
      try {
        // 더미 데이터
        const dummyData = [
          { id: 1, content: "김다미님이 메세지를 보냈습니다", icon: "message" },
          {
            id: 2,
            content: "박주영님이 동행 요청 메세지를 보냈습니다",
            icon: "request",
          },
          { id: 3, content: "백서영님이 메세지를 보냈습니다", icon: "message" },
          { id: 4, content: "여행 동행 후기를 작성해주세요!", iWcon: "review" },
        ];

        // 1초 후에 더미 데이터를 상태로 설정 (실제로는 API 요청 후에 호출해야 함)
        setTimeout(() => {
          setNotifications(dummyData);
        }, 1000);
      } catch (error) {
        console.error("알림을 불러오는 중 오류 발생:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className={styles.notificationsContainer}>
      <div className={styles.notificationList}>
        {notifications.map((notification) => (
          <React.Fragment key={notification.id}>
            <div className={styles.notificationContainer}>
              <div className={styles.notification}>{notification.content}</div>
              <div className={styles.smallText}>10시간 전</div>
            </div>
            <hr className={styles.divider} /> {/* 각 알림 아이템 아래에 구분선 추가 */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
