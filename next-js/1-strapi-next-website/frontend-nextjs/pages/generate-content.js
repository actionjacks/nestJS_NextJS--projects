import { Box } from "reflexbox";
import getConfig from "next/config";
import faker from "faker";

const { publicRuntimeConfig } = getConfig();

function GenerateContent() {
  async function addFakeContnet() {
    const postData = {
      Title: faker.lorem.sentence(),
      Content: faker.lorem.paragraph(),
    };

    const generate = await fetch(`${publicRuntimeConfig.API_URL}/faker-posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const generateResponse = await generate.json();
  }

  return (
    <Box maxWidth={960} width="100%" mx="auto" px={30}>
      <button onClick={() => addFakeContnet()}>Generate Strapi Content</button>
    </Box>
  );
}

export default GenerateContent;
