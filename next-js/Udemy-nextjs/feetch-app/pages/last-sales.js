import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://jackmessenger-e9aff.firebaseio.com/sales.json"
  );

  useEffect(() => {
    const transformedSales = [];

    for (const key in data) {
      transformedSales.push({
        id: key,
        username: data[key].username,
        valume: data[key].valume,
      });
    }
    setSales(transformedSales);
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://jackmessenger-e9aff.firebaseio.com/sales.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedSales = [];

  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           valume: data[key].valume,
  //         });
  //       }

  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }
  // if (!sales) {
  //   return <h1>no data yet</h1>;
  // }

  if (error) {
    return <h1>fail load data</h1>;
  }
  if (!data && !sales) {
    return <h1>LOADING...</h1>;
  }

  return (
    <ul>
      {sales.map(({ id, username, valume }) => (
        <li key={id}>
          {username} - PLN {valume}
        </li>
      ))}
    </ul>
  );
}
export default LastSalesPage;

export async function getStaticProps() {
  const response = await fetch(
    "https://jackmessenger-e9aff.firebaseio.com/sales.json"
  );
  const data = await response.json();
  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      valume: data[key].valume,
    });
  }

  return { props: { sales: transformedSales }, revalidate: 10 };
}
