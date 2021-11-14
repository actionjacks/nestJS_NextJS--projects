import { NextSeo } from "next-seo";
import { Box } from "reflexbox";
import fetch from "isomorphic-unfetch";

function About({ pages }) {
  const SEO = {
    title: "About page",
    description: "just ur normal about page",
    openGraph: {
      title: "About page",
      description: "just u normal about page",
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Box maxWidth={960} width="100%" mx="auto" px={30} pt={40}>
        <Box as="div" my={40}>
          <Box as="h2" my={40}>
            {pages.title}
          </Box>
          <div dangerouslySetInnerHTML={{ __html: pages.content }} />
        </Box>
      </Box>
    </>
  );
}
export async function getStaticProps(context) {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/pages/1`);
  const data = await res.json();

  return { props: { pages: data } };
}

export default About;
