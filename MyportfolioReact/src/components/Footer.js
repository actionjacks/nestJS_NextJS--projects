import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import scroll from "react-scroll";

function Footer({ theme }) {
  const handleClick = () => {
    scroll.animateScroll.scrollToTop();
  };

  return (
    <div className={`footer ${theme}`}>
      <span className="footer_arrow">
        <img
          src="./images/arrow_icon.png"
          className="arrow__icon"
          onClick={handleClick}
        />
      </span>
      <div className="footer__icons">
        <a href="https://github.com/actionjacks">
          <GitHubIcon className={`githubIcon ${theme}`} />
        </a>
        <a href="https://www.facebook.com/jaxoo.jack">
          <FacebookIcon className={`facebookIcon ${theme}`} />
        </a>
      </div>
      <ul className="footer__copyright">
        <li>
          &copy; All credit goes to Jacek Zablocki - Copyright 2021 Jacek
          Zablocki
        </li>
        <li>
          Design by
          <a title="jaxoo" href="#" id="jaxoo">
            jaxoo
          </a>
        </li>
        <li className="footer__reactIcon">
          <p>Powered by</p>
          <a
            className="icon__react"
            href="https://pl.reactjs.org/docs/getting-started.html"
          >
            <img src="./images/logo.png" width={15} height={15} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
