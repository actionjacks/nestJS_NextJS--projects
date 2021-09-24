import Product from "./Product";

function ProductFeed({ products }) {
  return (
    //md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52
    <div className="grid grid-cols-1 md:grid-cols-2">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            category={category}
            description={description}
            image={image}
          />
        ))}
      <img
        className="md:col-span-full"
        src="https://www.games-workshop.com/resources/touts/2021-06-26/GW-Update-EU-Import-Taxes-And-Duties-2021-06-26-DoubleSlim-EN-bm.jpg"
        alt=""
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              category={category}
              description={description}
              image={image}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            category={category}
            description={description}
            image={image}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
