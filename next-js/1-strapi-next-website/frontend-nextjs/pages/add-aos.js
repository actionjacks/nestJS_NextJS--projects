import { Box } from "reflexbox";
import styled from "@emotion/styled";
import getConfig from "next/config";
import { useState } from "react";
import { parseCookies } from "nookies";

const { publicRuntimeConfig } = getConfig();

function AddAos() {
  const [aosTitle, setAosTitle] = useState("");
  const [aosSlug, setAosSlug] = useState("");

  async function addAos() {
    const jwt = parseCookies().jwt;

    const aosInfo = {
      title: aosTitle,
      slug: aosSlug,
    };

    const add = await fetch(`${publicRuntimeConfig.API_URL}/age-of-sigmars`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aosInfo),
    });

    const addResponse = await add.json();
    setAosTitle("");
    setAosSlug("");

    console.log(addResponse);
  }

  return (
    <AddMovieStyled>
      <Box maxWidth={960} width="100%" mx="auto" px={30}>
        <Box as="h2" my={40}>
          ADD new AoS
        </Box>
        <form>
          <input
            type="text"
            onChange={(e) => setAosTitle(e.target.value)}
            value={aosTitle}
            placeholder="Aos title"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setAosSlug(e.target.value)}
            value={aosSlug}
            placeholder="Aos slug"
          />
          <br />
          <button type="button" onClick={() => addAos()}>
            Add AOS
          </button>
        </form>
      </Box>
    </AddMovieStyled>
  );
}

const AddMovieStyled = styled.div`
  input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
`;

export default AddAos;
