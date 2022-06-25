import styled from "styled-components";

function OurBrands({ url }) {
  return (
    <BranContainer>
      <BrandImg loading="lazy" data-aos="zoom-out" src={url} alt="" />
    </BranContainer>
  );
}

export default OurBrands;

const BranContainer = styled.div`
  justify-content: space-around;
  padding: 10px;
  width: 22.22%;
  height: 140px;
  transition: 0.6s;

  @media (max-width: 767.98px) {
    width: 33.33%;
    padding: 2px;
  }

  @media (max-width: 575.98px) {
    width: 39%;
    padding: 2px;
  }

  :hover {
    transform: scale(0.9);
    filter: grayscale(100%);
    z-index: 1;
  }
`;

const BrandImg = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
