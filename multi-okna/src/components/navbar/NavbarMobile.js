import React, { useState } from "react";
//routes names for links
import navItems from "../../navbarRoutes";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
// slide stack elastic bubble push pushRotate scaleDown scaleRotate fallDown reveal
import { bubble as Menu } from "react-burger-menu";

import HomeIcon from "@material-ui/icons/Home";
import BurgerIcon from "./BurgerIcon";
import CloseIcon from "./CloseIcon";

import styles from "./styles/NavbarMobileStyles";
// disable scroll-bar in sidebar container
import "./styles/Navbar.css";

function NavbarMobile({ classes, pageWrapId, outerContainerId }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Menu
        styles={styles}
        isOpen={menuOpen}
        disableCloseOnEsc={true}
        disableOverlayClick
        outerContainerId={outerContainerId}
        pageWrapId={pageWrapId}
        itemListElement="div"
        // burger icon
        customBurgerIcon={
          <BurgerIcon toggleMenu={toggleMenu} menuOpen={menuOpen} />
        }
        //close icon
        customCrossIcon={<CloseIcon toggleMenu={toggleMenu} />}
      >
        <NavLink className="menu-item" exact to="/">
          <HomeIcon style={{ width: "100%" }} onClick={toggleMenu} />
        </NavLink>

        {navItems[0].left.map((item) => (
          <NavLink
            className="menu-item"
            exact
            to={item.url}
            onClick={toggleMenu}
          >
            {item.name}
          </NavLink>
        ))}
        {navItems[1].right.map((item) => (
          <NavLink
            className="menu-item"
            exact
            to={item.url}
            onClick={toggleMenu}
          >
            {item.name}
          </NavLink>
        ))}
      </Menu>
    </>
  );
}

export default withStyles(styles)(NavbarMobile);
