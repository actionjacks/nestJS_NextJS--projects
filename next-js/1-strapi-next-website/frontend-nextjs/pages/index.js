import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
import Card from "../components/Card";

export default function Home({ data }) {
  console.log(data);

  return (
    <Box
      maxWidth={960}
      width="100%"
      mx="auto"
      px={30}
      //brakepoints just array white properties
      // bg={["red", "blue"]}
    >
      <Box my={40} as="h2">
        warhammer
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "row"]}
        mb={100}
      >
        {data.map((item) => (
          <Box key={item.id} width={["100%", "30%"]}>
            <Card data={item} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/age-of-sigmars`);
  const data = await res.json();

  return { props: { data } };
}
