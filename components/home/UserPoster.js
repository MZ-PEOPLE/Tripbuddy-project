import PosterImage from "./PosterImageBox";
import PosterDetail from "./PosterDetail";
import styles from "./UserPoster.module.css";

const UserPoster = () => {
  const Props = [
    // 임시 테이블
    {
      day: 3,
      schedule: { start: "12/10", end: "12/12" },
      user: "20대 여성",
      location: "괌",
      like: false,
      imgSrc: "/img/trav.png",
    },
    {
      day: 1,
      schedule: { start: "12/02", end: "12/02" },
      user: "30대 남성",
      location: "부산",
      like: true,
      imgSrc: "/img/trav1.png",
    },
    {
      day: 4,
      schedule: { start: "12/15", end: "12/18" },
      user: "20대 남성",
      location: "제주도",
      like: false,
      imgSrc: "/img/trav2.png",
    },
  ];

  return Props.map((Prop) => (
    <div className={styles.Container}>
      {/* 메인부모박스} */}
      <PosterImage location={Prop.location} isLike={Prop.like} imgSrc={Prop.imgSrc} />
      {/* 사진이 들어갈 박스 } */}
      <PosterDetail day={Prop.day} schedule={Prop.schedule} userInfo={Prop.user} />
      {/* 상세 정보가 들어갈 박스 } */}
    </div>
  ));
};

export default UserPoster;
