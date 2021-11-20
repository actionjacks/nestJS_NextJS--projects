import { useState } from "react";
import { Box } from "reflexbox";
import getConfig from "next/config";
import styled from "@emotion/styled";
import { setCookie } from "nookies";
import Router from "next/router";

const { publicRuntimeConfig } = getConfig();

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useState(() => {}, []);

  async function handleRegister() {
    //strapi
    const registerInfo = {
      username: username,
      email: email,
      password: password,
    };

    const register = await fetch(
      `${publicRuntimeConfig.API_URL}/auth/local/register`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      }
    );
    const registerResponse = await register.json();
    console.log(registerResponse);
  }
  return (
    <>
      <RegisterStyled>
        <Box maxWidth={960} width="100%" mx="auto" px={30} as="h2" my={40}>
          You need to register to access this page
        </Box>
        <Box maxWidth={960} width="100%" mx="auto" px={30} as="h2" my={40}>
          <form>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <br />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <br />
            <button type="button" onClick={() => handleRegister()}>
              Register
            </button>
          </form>
        </Box>
      </RegisterStyled>
    </>
  );
}

const RegisterStyled = styled.div`
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

export default Register;
