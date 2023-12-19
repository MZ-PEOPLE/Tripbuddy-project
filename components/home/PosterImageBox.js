import styles from "./PosterImageBox.module.css";
import HeartIconToggle from "../postDetail/HeartIconToggle";
import { TiLocation } from "react-icons/ti";

const PosterImage = ({ location, isLike, imgSrc }) => {
  const locations = location.split(" ")[2];

  return (
    <div className={styles.imgBox}>
      <img src={imgSrc} className={styles.userImg}></img>
      <div className={styles.infoBox}>
        <div className={styles.locationsBox}>
          <TiLocation className={styles.marker_img} />
          <div className={styles.location}>{locations}</div>
        </div>
        <div className={styles.likeBtn}>
          <HeartIconToggle />
        </div>
      </div>
    </div>
  );
};

export default PosterImage;
