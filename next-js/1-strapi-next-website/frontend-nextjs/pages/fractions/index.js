import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { Flex, Box } from "reflexbox";

function Fraction({ data, page, numberOfAos }) {
  const router = useRouter();

  const lastPage = Math.ceil(numberOfAos / 3);

  return (
    <Box maxWidth={960} width="100%" mx="auto" px={30} pt={40}>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <h3>{data.title}</h3>
          </li>
        ))}
      </ul>
      <Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
        <button
          disabled={page <= 1}
          onClick={() => router.push(`/fractions?page=${page - 1}`)}
        >
          Previous
        </button>
        <button
          disabled={page >= lastPage}
          onClick={() => router.push(`/fractions?page=${page + 1}`)}
        >
          Next
        </button>
      </Flex>
    </Box>
  );
}

export default Fraction;

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;

  const start = +page === 1 ? 0 : (+page - 1) * 3;

  const numberOfAosResponse = await fetch(`${API_URL}/age-of-sigmars/count`);
  const numberOfAos = await numberOfAosResponse.json();

  const res = await fetch(`${API_URL}/age-of-sigmars?_limit=3&_start=${start}`);
  const data = await res.json();

  return { props: { data: data, page: +page, numberOfAos: numberOfAos } };
}
