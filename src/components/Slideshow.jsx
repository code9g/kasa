import { useState } from "react";

import nextIcon from "../assets/icons/next.svg";
import previousIcon from "../assets/icons/previous.svg";

function Slideshow({ slides, alt = "", startAt = 0 }) {
  const [current, setCurrent] = useState(startAt);

  const n = slides.length;

  if (n === 0) {
    return <div>Pas de photo</div>;
  }

  function next() {
    setCurrent((index) => (index + 1) % n);
  }

  function previous() {
    setCurrent((index) => (index === 0 ? n : index) - 1);
  }

  return (
    <div className="slideshow">
      {slides.map((url, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : "inactive"}`}
        >
          {index === current && <img className="picture" src={url} alt={alt} />}
        </div>
      ))}
      {n > 1 && (
        <>
          <img
            src={previousIcon}
            alt=""
            className="previous"
            onClick={previous}
          />
          <div className="current">
            {current + 1}/{slides.length}
          </div>
          <img src={nextIcon} alt="" className="next" onClick={next} />
        </>
      )}
    </div>
  );
}

export default Slideshow;
