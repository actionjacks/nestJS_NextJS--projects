import Link from "next/link";
import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";
//components
import Navigation from "./Navigation";
import ToggleNavigationColorButton from "./ToggleNavigationColorButton";
import LanguageSwitcher from "./LanguageSwitcher";

function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <Box maxWidth={960} width="100%" mx="auto" px={30}>
        <Flex justifyContent="space-between" alignItems="center">
          <span className="logo-text">Pieczara-bitewna</span>
          <div className="logo">
            <Link href="/">
              <a>
                <img src="./assets/img/logo.webp" />
              </a>
            </Link>
          </div>

          <Navigation />
          <ToggleNavigationColorButton />
          <LanguageSwitcher />
        </Flex>
      </Box>
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
