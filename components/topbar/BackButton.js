import { useRouter } from "next/router";
import style from "./BackButton.module.css";

const BackBtn = () => {
  const router = useRouter();

  const goBack = () => {
    router.back(); // 이전 페이지로 이동
  };
  return (
    <button onClick={goBack}>
      <img src="/img/left.png" className={style.imgSizing} />
    </button>
  );
};

export default BackBtn;
