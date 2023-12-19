import Slider from "react-slick";
import styles from "./ImageSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ imgs }) => {
  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {imgs.map((img, index) => (
        // 이미지를 여러개 받아 슬라이드 형식으로 보여줌, 한개일경우 안움직임
        <button key={index}>
          <div className={styles.imgBox}>
            <img src={img} className={styles.img} />
          </div>
        </button>
      ))}
    </Slider>
  );
};

export default ImageSlider;
