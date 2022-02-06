import React, { useState, useEffect, useRef } from "react";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import "./ImageSlider.css";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevCurrent) =>
          prevCurrent === length - 1 ? 0 : prevCurrent + 1
        ),
      4000
    );
    return () => resetTimeout();
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider">
      <BiLeftArrow className="left-arrow" onClick={prevSlide} />
      <BiRightArrow className="right-arrow" onClick={nextSlide} />
      {slides.map((img, i) => (
        <div key={img.id} className={i === current ? "slide active" : "slide"}>
          {i === current && <img src={img.src} className="image" />}
        </div>
      ))}
      <div className="dot-container">
        {slides.map((dot, i) => (
          <div
            className={`dot ${i === current ? "dot--active" : ""}`}
            onClick={() => setCurrent(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
