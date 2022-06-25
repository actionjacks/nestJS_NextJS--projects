import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

function DoorBox({ imgUrl }) {
  return (
    <Container>
      <Image data-aos="zoom-out" src={imgUrl} />
    </Container>
  );
}

export default DoorBox;

const Container = styled.div`
  width: 50%;
  transition: 0.3s;

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

  @media (max-width: 767.98px) {
  }

  @media (max-width: 575.98px) {
  }
`;
