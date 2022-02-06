import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const Carousel3 = ({ images }) => {
  return (
    <section className="section" aria-labelledby="example3">
      <div className="carousel-container">
        <Carousel
          images={images}
          isRTL={true}
          isLoop={true}
          hasCaptions={false}
          hasThumbnails={false}
          hasSizeButton={false}
          hasIndexBoard={false}
          hasDotButtons={false}
          shouldSwipeOnMouse={true}
          playIcon={false}
          style={{
            height: "70vh",
            padding: "0 1%",
            backgroundColor: "transparent",
          }}
        />
      </div>
    </section>
  );
};

export default Carousel3;
