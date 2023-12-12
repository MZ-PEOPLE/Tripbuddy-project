import { useState } from "react";
import styles from "./UserPostContents.module.css";

function UserPostContents() {
  const [datas, setDatas] = useState([
    {
      src: "https://a.cdn-hotels.com/gdcs/production144/d992/418cd5c1-7f91-4c44-9f39-3016b033eaa1.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      icon_src: "https://cdn-icons-png.flaticon.com/128/2340/2340091.png",
      alt: "강릉 사진",
      title: "강릉",
      date: "12월 3일 ~ 12월 5일",
    },
    {
      src: "https://mediahub.seoul.go.kr/wp-content/uploads/2015/01/f9ca3f3426800ac74efd7cd16c38d42f.jpg",
      icon_src: "https://cdn-icons-png.flaticon.com/128/2340/2340091.png",
      alt: "서울 사진",
      title: "서울",
      date: "12월 20일 ~ 12월 26일",
    },
  ]);
  console.log(datas);
  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        {datas.map((data, index) => (
          <>
            <div className={styles.postContent}>
              <img
                src={data.src}
                alt={data.alt}
                className={styles.postContentPic}
              />
              <div className={styles.hiddenText}>{data.date}</div>
              <div className={styles.IconBoxContainer}>
                <div className={styles.IconBox}>
                  <img
                    src={data.icon_src}
                    alt="아이콘"
                    className={styles.Icon}
                  />
                  <p className={styles.IconText}>{data.title}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default UserPostContents;
