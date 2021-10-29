import { Box, Flex } from "reflexbox";

function Fraction({ data }) {
  console.log(data);
  return (
    <Box maxWidth={960} width="100%" mx="auto" px={30}>
      <Box as="h2" my={40}>
        {data.title}
      </Box>
      <Box maxWidth={600}>{data.fraction}</Box>
    </Box>
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
