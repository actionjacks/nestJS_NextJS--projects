import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative ">
      {/* gradient */}
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      {/* carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            className=" object-contain"
            loading="lazy"
            src="https://www.games-workshop.com/resources/catalog/product/920x950/99810213004_FirebellyNEW01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className=" object-contain"
            loading="lazy"
            src="https://www.games-workshop.com/resources/catalog/product/920x950/99120202014_EMPVolleyGun01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className=" object-contain"
            loading="lazy"
            src="https://www.games-workshop.com/resources/catalog/product/920x950/99120207031_DeathLordsMortarchsMannfred01.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
