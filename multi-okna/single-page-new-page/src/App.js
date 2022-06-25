import { useState } from "react";
import Home from "./components/Home/index";
import Navbar from "./components/Navbar";

import btnNames from "./btnsNames";

import { withStyles } from "@material-ui/core/styles";
import styles from "./AppStyles";
import "./App.css";

function App({ classes }) {
  const [selected, setSelected] = useState(0);
  const [disableBtns, setDisableBtns] = useState(false);

  const handleClick = (e, fromClick) => {
    let activeSlide = null;
    setDisableBtns(true);

    switch (fromClick) {
      case "navbarClick":
        activeSlide = parseInt(e.target.value);
        setSelected(activeSlide);
        activeNavbarBtns();
        break;
      case "sliderClick":
        activeSlide = parseInt(e.nextMedia.id) - 1;
        setSelected(activeSlide);
        activeNavbarBtns();
        break;
      default:
        console.log("%cError !", "background: #222; color: #bada55");
        throw `Passed invalid string name. 
        Should be: "navbarClick" or "sliderClick" 
        the data provided is ${fromClick}`;
    }
  };
  const activeNavbarBtns = () => {
    setTimeout(() => {
      setDisableBtns(false);
    }, 1500);
  };

  return (
    <div className={classes.root}>
      <Navbar
        handleClick={handleClick}
        selected={selected}
        disableBtns={disableBtns}
        btnNumbers={btnNames}
      />
      <Home selected={selected} handleClick={handleClick} />
    </div>
  );
}

export default withStyles(styles)(App);
