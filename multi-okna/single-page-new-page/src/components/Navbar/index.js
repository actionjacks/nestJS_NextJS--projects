import React, { useState, useEffect } from "react";
import BurgerIcon from "./BurgerIcon";

import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";

function Navbar({
  handleClick = null,
  classes,
  selected,
  btnNumbers,
  disableBtns,
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 767) {
        setActive(false);
      }
    });
    return () => window.removeEventListener("resize", null);
  }, []);

  return (
    <Container className={classes.navbarContainer}>
      <div className={classes.navbarMobile}>
        <div
          onClick={() => setActive(!active)}
          className={`container ${active ? "active" : ""}`}
        >
          <BurgerIcon />
        </div>
      </div>
      <div
        className={`${
          active ? classes.navbarMobileContent : classes.navbarDesktop
        }`}
      >
        {btnNumbers.map((item, index) => (
          <>
            <button
              disabled={disableBtns || selected === index}
              className={`${classes.navbarBtn} ${
                selected === index ? classes.navbarBtnActive : ""
              }`}
              value={index}
              onClick={(e) => handleClick(e, "navbarClick")}
            >
              {btnNumbers[index]}
            </button>
          </>
        ))}
      </div>
    </Container>
  );
}

export default withStyles(styles)(Navbar);
