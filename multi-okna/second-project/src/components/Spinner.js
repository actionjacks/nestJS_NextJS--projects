import React from "react";
import { RotatingPlane } from "better-react-spinkit";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <SpinnerContainer>
      <RotatingPlane size={65} color="black" />
    </SpinnerContainer>
  );
}

export default Loader;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
