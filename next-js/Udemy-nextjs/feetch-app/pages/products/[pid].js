//node modules
import path from "path";
import fs from "fs/promises";

function ProductDetailPage({ loadedProduct }) {
  if (!loadedProduct) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}
export default ProductDetailPage;

async function getData() {
  const filePath = path.join(process.cwd(), "data", "placeholder-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    // [
    //   { params: { pid: "p1" } },
    //   { params: { pid: "p2" } },
    //   { params: { pid: "p3" } },
    // ],
    fallback: true, //if true paths well generated only if needed only u need handle this like in react loading spinner,
    // fallback: "blocking", //- better way
  };
}
