import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

function WindowBox({ imgUrl, title, desc }) {
  return (
    <Container>
      <Image data-aos="zoom-in" src={imgUrl} />
      <ContentContainer>
        <Title data-aos="fade-right">{title}</Title>
        <Description data-aos="fade-right">{desc}</Description>
      </ContentContainer>
    </Container>
  );
}

export default WindowBox;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }

  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  padding: 2rem;
  margin-left: 1rem;
  border: 1px solid #e0e0e0; //todo remove

  @media (max-width: 767.98px) {
    width: 80%;
  }
  @media (max-width: 575.98px) {
    width: 100%;
  }
`;
const Title = styled.h2``;
const Description = styled.p``;
const Image = styled(LazyLoadImage)`
  width: 40%;
  object-fit: "cover";
  padding: 2.5rem;
  height: 100%;

  @media (max-width: 767.98px) {
    width: 80%;
  }

  @media (max-width: 575.98px) {
    width: 100%;
    padding: 1rem;
  }
`;
