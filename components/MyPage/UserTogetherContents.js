import { useState } from "react";
import { TiLocation } from "react-icons/ti";
import styles from "./UserTogetherContents.module.css";

function UserTogetherContents() {
  const [datas, setDatas] = useState(null);
  console.log(datas);
  return (
    <div className={styles.togetherContainer}>
      <div className={styles.togetherBox}>
        {datas &&
          datas.map((data, index) => (
            <div className={styles.togetherContent} key={index}>
              <img src={data.src} alt={data.alt} className={styles.togetherPic} />
              <div className={styles.IconContainer}>
                <TiLocation className={styles.Icon} />
                <p className={styles.IconText}>{data.title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserTogetherContents;
