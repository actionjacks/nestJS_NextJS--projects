import React from "react";

//https://www.npmjs.com/package/react-gallery-carousel
//react-gallery-carousel

import Carousel3 from "./Carousel3";

const images = [900, 800, 700, 600, 500].map((size) => ({
  src: `https://placedog.net/${size}/${size}`,
}));

function App() {
  return (
    <div>
      <Carousel3 images={images} />
    </div>
  );
}

export default Home;
