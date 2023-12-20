import GoogleMaps from "./GoogleMaps";
import styles from "./ContentBox.module.css";

const ContentBox = ({ items }) => {
  const { text, longitude, latitude } = items;
  const location = { lng: longitude, lat: latitude };

  return (
    <div className={styles.Container}>
      {text ? <div className={styles.textBox}>{text}</div> : null}
      {longitude ? (
        <div className={styles.locationBox}>
          <GoogleMaps location={location} />
          <div className={styles.boxs}></div>
        </div>
      ) : null}
    </div>
  );
};

export default ContentBox;
