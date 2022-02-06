import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "../styles/GalleryContainer.css";

function GalleryContainer({ imageSelected, galleryImages }) {
  const [imageIndex, setImageIndex] = useState(1);

  const prev = () => {
    const galleryImgLength = galleryImages[imageSelected].variantImg.length;
    if (
      imageIndex === galleryImgLength ||
      (imageIndex < galleryImgLength && imageIndex !== 1)
    ) {
      setImageIndex(imageIndex - 1);
    }
    if (imageIndex === 1) {
      setImageIndex(galleryImgLength);
    }
  };
  const next = () => {
    const galleryImgLength = galleryImages[imageSelected].variantImg.length;
    if (imageIndex < galleryImgLength) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(1);
    }
  };

  console.log(galleryImages[imageSelected].variantImg);
  return (
    <div className="galleryContainer">
      {galleryImages[imageSelected].variantImg ? (
        <div className="galleryVariant">
          <img src={`./assets/img${imageSelected}-${imageIndex}.jpg`} alt="" />
          <NavigateNextIcon
            className="galleryVariant__prevButton"
            onClick={prev}
          />
          <NavigateNextIcon
            className="galleryVariant__nextButton"
            onClick={next}
          />
        </div>
      ) : (
        <img src={`./assets/img${imageSelected}.jpg`} alt="" />
      )}
    </div>
  );
}
export default GalleryContainer;
