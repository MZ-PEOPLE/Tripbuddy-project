import { useEffect, useState } from "react";
import styles from "./UserPostContents.module.css";
import { TiLocation } from "react-icons/ti";

function UserPostContents({ userid }) {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getProfileposter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userid,
          }),
        });

        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userid]);
  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        {datas &&
          datas.map((data, index) => (
            <>
              <div className={styles.postContent}>
                <img
                  src={data.imagePaths[0]}
                  alt=""
                  className={styles.postContentPic}
                />
                <div className={styles.IconBoxContainer}>
                  <div className={styles.IconBox}>
                    <TiLocation className={styles.Icon} />
                    <p className={styles.iocation}>
                      {data.location.name.split(" ")[1]}
                    </p>
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
