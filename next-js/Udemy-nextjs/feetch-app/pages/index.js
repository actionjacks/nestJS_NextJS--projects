import Link from "next/link";

//node modules
import path from "path";
import fs from "fs/promises";

export default function Home({ products }) {
  return (
    <ul>
      {products.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/products/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("(Re-_generating...revalidate: 10 | 10s");

  //                     .cwd corent working direction
  const filePath = path.join(process.cwd(), "data", "placeholder-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  //if no data or credentials is incorrect
  if (!data) {
    return {
      redirect: {
        destination: "/no-data", //no-data page
      },
    };
  }

  //handle fetch data err, serve 404 page
  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
