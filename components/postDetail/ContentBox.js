import styles from "./ContentBox.module.css";

const ContentBox = ({ items }) => {
  const { text, longitude, latitude } = items;

  return (
    <div className={styles.Container}>
      {text ? <div className={styles.textBox}>{text}</div> : null}
      {longitude ? (
        <div className={styles.locationBox}>
          위치: X = {longitude}, Y = {latitude}
          {/* 위의 좌표를 구글 맵 좌표에 대입하면 됨 */}
          <img src="/img/trav.png" className={styles.mapSizing} />
          {/* 위에 이미지를 지도 사이징 할 곳임 */}
        </div>
      ) : null}
    </div>
  );
};

export default ContentBox;
