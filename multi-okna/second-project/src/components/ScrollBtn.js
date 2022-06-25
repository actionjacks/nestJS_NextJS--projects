import React, { useState, useEffect } from "react";

import colors from "../root-styles/Colors";
import arrowIcon from "../assets/scroll-arrow.png";
import styled from "styled-components";

function ScrollBtn() {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 250) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return <Container href="#-root" showIcon={showIcon}></Container>;
}

export default ScrollBtn;

const Container = styled.a`
  position: fixed;
  bottom: 100px;
  right: 70px;
  opacity: ${({ showIcon }) => (showIcon ? 1 : 0)};
  background: ${colors.mainBlue} url(${arrowIcon}) no-repeat center center;
  z-index: 90;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.5s;

  @media (max-width: 575.98px) {
    right: 20px;
  }
`;
