import { Box } from "reflexbox";
import getConfig from "next/config";

function AuthArticles({ articles }) {
  return (
    <>
      <Box maxWidth={960} width="100%" mx="auto" px={30}>
        <Box as="h2" my={40}>
          Payed articles
        </Box>
      </Box>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/auth-article`);
  const articles = await res.json();

  return { props: { articles: articles } };
}

export default AuthArticles;
