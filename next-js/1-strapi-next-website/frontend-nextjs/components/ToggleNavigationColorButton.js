import HeaderContext from "../context/HeadContext";
import { useContext } from "react";

import styled from "@emotion/styled";

function ToggleNavigationColorButton() {
  const { color, toggleColor } = useContext(HeaderContext);

  const Button = styled.button`
    color: turquoise;
    margin-left: 20px;
  `;

  return (
    <Button onClick={() => toggleColor(!color)}>Toggle Navigation Color</Button>
  );
}

export default ToggleNavigationColorButton;
