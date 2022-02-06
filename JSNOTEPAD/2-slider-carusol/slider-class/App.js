import React, { useEffect } from "react";

import Slider from "./Slider";
import "./Slider.css";

function Carousel() {
  const slides = [
    {
      id: 1,
      title: "pierwszy slider",
      desc: "to jest tresc 1 slidera",
    },
    {
      id: 2,
      title: "drugi slider",
      desc: "to jest tresc 2 slidera",
    },
    {
      id: 3,
      title: "trzeci slider",
      desc: "to jest tresc 3 slidera",
    },
  ];

  useEffect(() => {
    const slide = new Slider("#slider1", {
      pauseTime: 8000,
      generateDots: true,
      generatePrevNext: true,
      prevText: "Poprzedni",
      nextText: "Następny",
    });
  }, []);

  return (
    <div className="elements-list" id="slider1">
      {slides.map((item) => (
        <article key={item.id} className="element">
          <h2 className="element-title">{item.title}</h2>
          <div className="element-text">{item.desc}</div>
        </article>
      ))}
    </div>
  );
}

export default Carousel;
