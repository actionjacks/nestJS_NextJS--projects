import React from "react";

import { withStyles } from "@material-ui/core/styles";
import "./styles/BurgerIcon.css";
import styles from "./styles/BurgerIconStyles";

function BurgerIcon({ classes, toggleMenu, menuOpen }) {
  let backgroundColor = `${menuOpen ? "white" : "black"}`;

  return (
    <>
      <input checked={menuOpen} type="checkbox" id="hi" />
      <label
        onClick={toggleMenu}
        className={`menu ${classes.menuBtn}`}
        for="hi"
      >
        <div
          style={{ backgroundColor: backgroundColor }}
          className={`bar ${classes.barDiv}`}
        ></div>
        <div
          style={{ backgroundColor: backgroundColor }}
          className={`bar ${classes.barDiv}`}
        ></div>
        <div
          style={{ backgroundColor: backgroundColor }}
          className={`bar ${classes.barDiv}`}
        ></div>
      </label>
    </>
  );
}

export default withStyles(styles)(BurgerIcon);
