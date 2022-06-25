import React from "react";
import ImageSlider from "./ImageSlider";
import SliderData from "./SliderData";

function Slider() {
  return (
    <>
      <ImageSlider slides={SliderData} />
    </>
  );
}

export default Slider;
