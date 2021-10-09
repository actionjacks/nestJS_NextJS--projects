import styled from "@emotion/styled";
import { rem } from "polished";

function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="container">
        <div className="logo">
          <img src="./assets/img/logo.webp" />
          <span className="logo-text">Pieczara-bitewna</span>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
  padding: 20px;

  .logo {
    display: flex;
    align-items: center;
  }

  .logo-text {
    color: #333333;
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px;
  }
`;

export default Header;
