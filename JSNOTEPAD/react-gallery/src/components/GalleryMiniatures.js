import React from "react";
import "../styles/GalleryMiniatures.css";

function GalleryMiniatures({ item, itemIndex, selectImage }) {
  const handleClick = () => {
    selectImage(itemIndex);
  };
  return (
    <div className="box__container">
      <img onClick={handleClick} src={item.img} alt="" />
    </div>
  );
}
export default GalleryMiniatures;
