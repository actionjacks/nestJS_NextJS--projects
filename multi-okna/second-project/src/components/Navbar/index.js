import React, { useState, useEffect } from "react";
import ContactTop from "./ContactTop";
import { NavLink } from "react-router-dom";

import NavbarLogo from "./assets/logo.webp";
import BurgerIcon from "./BurgerIcon";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
//animation mobile menu
import "./styles/AnimTransform.css";

//refactor the code to avoid building two menus
function Navbar({ classes, contacts, pageData }) {
  const [manuScrolled, setMenuScrolled] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    //aftere page load disable desktop navbar
    if (window.innerWidth <= 800) {
      setShowBurger(true);
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 60) {
        setMenuScrolled(true);
      }
      if (window.scrollY <= 50) {
        setMenuScrolled(false);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 800) {
        setShowBurger(false);
        setBurgerOpen(false);
      } else setShowBurger(true);
    });
    return () => {
      window.removeEventListener("scroll", null);
      window.removeEventListener("resize", null);
    };
  }, []);

  return (
    <header className={classes.root}>
      <ContactTop contacts={contacts} />

      {showBurger ? (
        <div
          onClick={() => setBurgerOpen(!burgerOpen)}
          className={`containerBurger${burgerOpen ? " active" : ""}`}
        >
          <BurgerIcon />
          <nav
            className={`${classes.menuContainerMobile} ${
              burgerOpen ? `${classes.mobileOpened} animMobileTransform` : ""
            }`}
          >
            <ul className={classes.menuMobile}>
              {pageData.map(({ name, url }, idx) => (
                <li className={classes.menuLinkMobile}>
                  <NavLink to={url} key={idx}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        <div>
          <nav
            className={
              !manuScrolled
                ? classes.menuContainer
                : classes.menuContainerScrolled
            }
          >
            <ul className={classes.menu}>
              <img className={classes.logoContainer} src={NavbarLogo} alt="" />

              {pageData.map(({ name, url }, idx) => (
                <li className={classes.menuLink}>
                  <NavLink to={url} key={idx}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default withStyles(styles)(Navbar);
