import { Box, Flex } from "reflexbox";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { NextSeo } from "next-seo";

function Fraction({ data }) {
  console.log(data);

  const SEO = {
    title: `Next AOS | ${data.title}`,
    description: `${data.description}`,
    openGraph: {
      title: `Next AOS | ${data.title}`,
      description: `${data.title}`,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Box maxWidth={960} width="100%" mx="auto" px={30}>
        <Box as="h2" my={40}>
          {data.title}
        </Box>
        <Box maxWidth={600}>{data.fraction}</Box>
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/age-of-sigmars?slug=${slug}`);
  const data = await res.json();

  return { props: { data: data[0] } };
}

export default Fraction;
