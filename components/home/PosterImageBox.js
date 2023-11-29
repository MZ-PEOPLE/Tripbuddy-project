import styles from "./PosterImageBox.module.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";

const PosterImage = ({ location, isLike, imgSrc }) => {
  return (
    <div className={styles.imgBox}>
      <img src={imgSrc} className={styles.userImg}></img>
      <div className={styles.infoBox}>
        <div className={styles.locationsBox}>
          <LuMapPin className={styles.marker_img} />
          <div className={styles.location}>{location}</div>
        </div>
        <div className={styles.likeBtn}>
          <BsFillSuitHeartFill
            className={`${styles.likeStyle} ${isLike ? styles.likeTrue : styles.likeFalse}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PosterImage;
