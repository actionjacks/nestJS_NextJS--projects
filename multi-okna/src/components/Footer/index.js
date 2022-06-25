import React from "react";
import { Link } from "react-router-dom";
import scroll from "react-scroll";

import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import styles from "./FooterStyle";

function Footer({ classes }) {
  const handleClick = () => {
    scroll.animateScroll.scrollToTop();
  };

  return (
    <div className={classes.root}>
      <div className={classes.iconContainer}>
        <Link>
          <FacebookIcon className={classes.icon} />
        </Link>
        <Link>
          <InstagramIcon className={classes.icon} />
        </Link>
        <Link>
          <YouTubeIcon className={classes.icon} />
        </Link>
      </div>
      <div className={classes.contactContainer}>
        <h2>Multi Okna sp. z o.o.</h2>
        <p>Polna 4a, 16-010 Wasilków</p>
        <a className={classes.footerLink} href="tel:607473123">
          Zadzwoń 607-473-123
        </a>
        <a className={classes.footerLink} href="mailto:biuro@multi-okna.pl">
          biuro@multi-okna.pl
        </a>
      </div>
      <span className={classes.credits}>
        Projekt i wykonanie:
        <br />
        actionjacks22@gmail.com
      </span>
      <ArrowUpwardIcon onClick={handleClick} className={classes.upIcon} />
    </div>
  );
}

export default withStyles(styles)(Footer);
