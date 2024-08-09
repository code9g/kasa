import { useState } from "react";
import starEmptyIcon from "../assets/icons/star-empty.svg";
import starFillIcon from "../assets/icons/star-fill.svg";

const stars = [1, 2, 3, 4, 5];

function Rating({ value, max = 5 }) {
  const [rating, setRating] = useState(value);

  return (
    <div className="rating">
      {stars.map((index) => (
        <button
          key={index}
          className="btn-star"
          onClick={() => setRating(index === rating ? index - 1 : index)}
        >
          <img
            className="star"
            src={index <= rating ? starFillIcon : starEmptyIcon}
            alt=""
          />
        </button>
      ))}
    </div>
  );
}

export default Rating;
