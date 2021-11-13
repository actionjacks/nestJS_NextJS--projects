import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext } from "react";
import HeaderContext from "../context/HeadContext";

function Navigation() {
  const router = useRouter();
  const value = useContext(HeaderContext);
  let { navigation, color } = value;

  return (
    <NavigationStyled color={color && color}>
      <ul>
        {navigation &&
          navigation.map((link) => (
            <li key={link.id}>
              <Link href={`${link.Slug}`}>
                <a
                  className={router.pathname === `${link.Slug}` ? "active" : ""}
                >
                  {link.Title}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </NavigationStyled>
  );
}
const NavigationStyled = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-left: 10px;
    }

    a {
      text-decoration: none;
      color: ${(props) => (props.color ? "#4c9ee3" : "#130")};

      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: #ef6800;
      }
    }
  }
`;

export default Navigation;
