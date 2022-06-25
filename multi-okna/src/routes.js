import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Window from "./components/route.window";
import WindowCovers from "./components/route.windowCovers";
import Door from "./components/route.door";
import Gate from "./components/route.gate";
import OurProjects from "./components/route.ourProjects";
import Contact from "./components/route.contact";

function routes() {
  return (
    <div
      style={{
        marginTop: "120px",
        width: "100%",
      }}
    >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/okna">
          <Window />
        </Route>
        <Route exact path="/oslony-okienne">
          <WindowCovers />
        </Route>
        <Route exact path="/drzwi">
          <Door />
        </Route>
        <Route exact path="/bramy-garazowe">
          <Gate />
        </Route>
        <Route exact path="/realizacje">
          <OurProjects />
        </Route>
        <Route exact path="/kontakt">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default routes;
