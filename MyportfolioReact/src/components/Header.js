import React, { useEffect, useState } from "react";
import Jello from "react-reveal/Jello";

function Header({ data, theme }) {
  const [show, handleShow] = useState(false);
  const [active, handleActive] = useState("--inactive");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleClick = () => {
    if (active === "--inactive") {
      handleActive("--active");
    } else {
      handleActive("--inactive");
    }
  };
  let idSectionForScroll = 0;

  return (
    <>
      <nav className="header__hamburger">
        <img
          onClick={handleClick}
          className={active}
          src="../images/menuBurger.png"
          alt=""
        />
        {data?.main ? (
          <>
            <nav className="header__hamburger__list">
              <ul className="header__hamburger__items">
                <Jello>
                  {data.main.headerOptions.map((menuOption, index) => (
                    <li className={`header__hamburger__item${active}`}>
                      <a
                        href={`#page-${++idSectionForScroll}`}
                        className={`header__hamburger__link ${theme}`}
                        key={index}
                      >
                        {menuOption}
                      </a>
                    </li>
                  ))}
                </Jello>
              </ul>
            </nav>
          </>
        ) : null}
      </nav>
      <div className={`header ${show && `nav__black ${theme}`}`}>
        {data?.main ? (
          <>
            <nav className="header__list">
              <ul className="header__items">
                {(idSectionForScroll = 0)}
                <Jello>
                  {data.main.headerOptions.map((menuOption, index) => (
                    <li className={`header__item ${theme}`}>
                      <a
                        href={`#page-${++idSectionForScroll}`}
                        className={`header__link ${theme}`}
                        key={index}
                      >
                        {menuOption}
                      </a>
                    </li>
                  ))}
                </Jello>
              </ul>
            </nav>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Header;
