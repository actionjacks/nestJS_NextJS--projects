import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles/SliderStyles.css";

// import Swiper core and required modules
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination]);

export default function Slider({ sliderTop, height }) {
  return (
    <>
      <Swiper
        style={{ height: `${height}vh` }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {sliderTop.map((url) => (
          <SwiperSlide>
            <img src={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
