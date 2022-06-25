import React, { useState, useEffect } from "react";
import navItems from "../../navbarRoutes";

import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";

function Navbar({ classes }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <div
      className={`${classes.navContainer} ${
        show ? `${classes.navActive}` : ""
      }`}
    >
      <div className={classes.left}>
        {navItems[0].left.map((item) => (
          <NavLink
            activeClassName={classes.active}
            className={classes.navItem}
            exact
            to={item.url}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <Link to="/">
        <img
          className={`${classes.logo} ${show ? `${classes.logoActive}` : ""}`}
          src={logo}
          alt=""
        />
      </Link>

      <div className={classes.right}>
        {navItems[1].right.map((item) => (
          <NavLink
            activeClassName={classes.active}
            className={classes.navItem}
            exact
            to={item.url}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(Navbar);
