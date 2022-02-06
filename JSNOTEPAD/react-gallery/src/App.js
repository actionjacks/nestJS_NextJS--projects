import { useState } from "react";
import AboutMe from "./components/AboutMe";
import GalleryMiniatures from "./components/GalleryMiniatures";
import GalleryContainer from "./components/GalleryContainer";

import "./App.css";

function App() {
  const [galleryImages, setGalleryImages] = useState([
    { img: "./assets/img0.jpg" },
    {
      img: "./assets/img1.jpg",
      variantImg: [
        "./assets/img1a.jpg",
        "./assets/img1b.jpg",
        "./assets/img1c.jpg",
      ],
    },
    { img: "./assets/img2.jpg" },
    { img: "./assets/img3.jpg" },
    { img: "./assets/img4.jpg" },
    { img: "./assets/img5.jpg" },
    { img: "./assets/img6.jpg" },
    { img: "./assets/img7.jpg" },
  ]);
  const [imageSelected, setImageSelected] = useState(0);

  return (
    <div className="wrapper">
      <AboutMe />
      <div className="gallery__body">
        <div className="leftSite__gallery">
          {galleryImages.map((item, index) => (
            <GalleryMiniatures
              key={index}
              item={item}
              itemIndex={index}
              selectImage={setImageSelected}
            />
          ))}
        </div>
        <div className="rightSite__gallery">
          <GalleryContainer
            imageSelected={imageSelected}
            galleryImages={galleryImages}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
