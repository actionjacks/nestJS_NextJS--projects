import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

function WindowCoversBox({ imgUrl, description }) {
  return (
    <Container>
      <Image data-aos="zoom-out" src={imgUrl} />
      <DescriptionContainer data-aos="fade-right">
        <Paragraph>{description}</Paragraph>
      </DescriptionContainer>
    </Container>
  );
}

export default WindowCoversBox;

const Container = styled.div`
  position: relative;
  width: 50%;
  transition: 0.3s;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  &:hover {
    filter: contrast(120%);
  }

  @media (max-width: 767.98px) {
    width: 100%;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;
const Image = styled(LazyLoadImage)`
  object-fit: "cover";
  width: 100%;
  height: 100%;

  @media (max-width: 767.98px) {
  }

  @media (max-width: 575.98px) {
  }
`;
const DescriptionContainer = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${colors.thirdDark};
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 25%;

  @media (max-width: 767.98px) {
    width: 35%;
  }

  @media (max-width: 575.98px) {
    width: 40%;
  }
`;
const Paragraph = styled.p`
  font-family: ${fonts.mainFont};
  font-size: 1rem;
  text-align: left;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.mainWhite};
`;
