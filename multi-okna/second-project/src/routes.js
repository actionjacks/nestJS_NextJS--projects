import React from "react";

import HomeBanner from "./screens/Home/HomeBanner";
import Home from "./screens/Home";

import WindowsBanner from "./screens/Windows/WindowsBanner";
import Windows from "./screens/Windows";

import WindowCoversBanner from "./screens/WindowCovers/WindowCoversBanner";
import WindowsCovers from "./screens/WindowCovers";

import DoorsBanner from "./screens/Doors/DoorsBanner";
import Doors from "./screens/Doors";

import GarageDoorsBanner from "./screens/GarageDoors/GarageDoorsBanner";
import GarageDoors from "./screens/GarageDoors";

import ContacBanner from "./screens/Contact/ContacBanner";
import Contact from "./screens/Contact";

import { Route, Switch } from "react-router-dom";

const BannerImgSrc = [
  "../assets/banner/img1.webp",
  "../assets/banner/img2.webp",
  "../assets/banner/img3.webp",
  "../assets/banner/img4.webp",
  "../assets/banner/img5.webp",
  "../assets/banner/img6.webp",
];

function routes({ data }) {
  return (
    <Switch>
      <Route exact path="/okna">
        <>
          <WindowsBanner
            title={data.windowContent[0].bannerSlogan}
            imgSrc={BannerImgSrc[1]}
          />
          <Windows data={data.windowContent} />
        </>
      </Route>

      <Route exact path="/oslony-okienne">
        <>
          <WindowCoversBanner
            title={data.windowsCovers[0].bannerSlogan}
            imgSrc={BannerImgSrc[2]}
          />
          <WindowsCovers
            description={data.windowsCovers[0].CoversDescription}
          />
        </>
      </Route>

      <Route exact path="/drzwi">
        <>
          <DoorsBanner
            title={data.doors[0].bannerSlogan}
            imgSrc={BannerImgSrc[3]}
          />
          <Doors description={data.doors[0].doorDescription} />
        </>
      </Route>

      <Route exact path="/bramy-garazowe">
        <>
          <GarageDoorsBanner
            title={data.garageDoors[0].bannerSlogan}
            imgSrc={BannerImgSrc[4]}
          />
          <GarageDoors description={data.garageDoors[0].CoversDescription} />
        </>
      </Route>

      <Route exact path="/kontakt">
        <>
          <ContacBanner
            title={data.contact[0].bannerSlogan}
            imgSrc={BannerImgSrc[5]}
          />
          <Contact data={data.windowContent} />
        </>
      </Route>

      <Route path="/">
        <>
          <HomeBanner
            title={data.homeContent[0].bannerSlogan}
            imgSrc={BannerImgSrc[0]}
          />
          <Home data={data.homeContent} />
        </>
      </Route>
    </Switch>
  );
}

export default routes;
