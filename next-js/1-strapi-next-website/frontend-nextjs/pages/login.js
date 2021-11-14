import { useState } from "react";
import { Box } from "reflexbox";
import getConfig from "next/config";
import styled from "@emotion/styled";
import { setCookie } from "nookies";
import Router from "next/router";

const { publicRuntimeConfig } = getConfig();

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useState(() => {}, []);

  async function handleLogin() {
    //strapi
    const loginInfo = {
      identifier: username,
      password: password,
    };

    const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    const loginResponse = await login.json();

    //save token respone as cookie
    setCookie(null, "jwt", loginResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    Router.push("/auth-articles");
  }
  return (
    <>
      <LoginStyled>
        <Box maxWidth={960} width="100%" mx="auto" px={30} as="h2" my={40}>
          You need to login to access this page
        </Box>
        <Box maxWidth={960} width="100%" mx="auto" px={30} as="h2" my={40}>
          <form>
            <input
              type="email"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <br />
            <button type="button" onClick={() => handleLogin()}>
              Login
            </button>
          </form>
        </Box>
      </LoginStyled>
    </>
  );
}

const LoginStyled = styled.div`
  input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
  button:hover {
    color: gray;
  }
`;

export async function getServerSideProps(context) {
  return { props: { data: null } };
}

export default Login;
