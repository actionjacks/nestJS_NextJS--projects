import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import styled from "styled-components";
import colors from "../../root-styles/Colors";

function DoorsBanner({ title, imgSrc }) {
  return (
    <Container>
      <Slogan data-aos="fade-right">{title}</Slogan>
      <Banner effect="opacity" data-aos="fade-right" src={imgSrc} />
      <ArrowTop data-aos="fade-up"></ArrowTop>
      <ArrowLeft data-aos="fade-down"></ArrowLeft>
    </Container>
  );
}

export default DoorsBanner;

const Container = styled.div`
  overflow: hidden;
  transition: 0.3s;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

  @media (max-width: 575.98px) {
  }
`;
const Slogan = styled.h2`
  transition: 0.3s;
  position: absolute;
  top: 20%;
  right: 0;
  z-index: 2;
  padding: 1rem;
  text-align: right;
  font-size: 106px;
  text-transform: uppercase;
  line-height: 90px;
  color: rgb(89, 177, 191);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 1);

  @media (max-width: 991.98px) {
    font-size: 70px;
    line-height: 70px;
    text-align: left;
  }

  @media (max-width: 767.98px) {
    font-size: 50px;
    line-height: 60px;
    text-align: left;
  }
`;
const Banner = styled(LazyLoadImage)`
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  transition: 0.3s;
  opacity: 0.9;
  object-fit: cover;
  width: 100%;
  z-index: -1;
  border-bottom: solid 5px ${colors.mainBlue};
  height: 80vh;

  @media (max-width: 575.98px) {
  }
`;
const ArrowTop = styled.span`
  position: absolute;
  z-index: 80;
  top: 0;
  left: 0;
  border-left: 40vw solid transparent;
  border-right: 40vw solid transparent;
  border-top: 40vw solid rgba(33, 33, 37, 0.1);
`;
const ArrowLeft = styled.span`
  position: absolute;
  z-index: 80;
  top: 0;
  left: 0;
  border-top: 40vw solid transparent;
  border-bottom: 40vw solid transparent;
  border-left: 40vw solid rgba(33, 33, 37, 0.1);
`;
