import fetch from "isomorphic-unfetch";
import Card from "../components/Card";

export default function Home({ data }) {
  console.log(data);
  return (
    <div className="container">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}

      <footer></footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/age-of-sigmars`);
  const data = await res.json();

  return { props: { data } };
}
