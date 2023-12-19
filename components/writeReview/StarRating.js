import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.css";


const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    onRatingChange(index);
  };

  return (
    <div className={styles.starContainer}>
      {[1, 2, 3, 4, 5].map((index) => (
        <FaStar
          key={index}
          className={`${styles.defaultStar} ${(hoveredRating || rating) >= index ? styles.yellowStar : ""
            }`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRating;
