import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

import StarIcon from "./StarIcon";
//redux
import { useDispatch } from "react-redux";
import { addToBasket } from "../src/slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, category, description, image }) {
  //redux
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  ); //todo dev
  const [hasPrime] = useState(Math.random() < 0.5); //todo dev

  //redux add item to basket to global cart
  const addItemToBasket = () => {
    const product = { id, title, price, category, description, image };
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <StarIcon />
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map(() => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="PLN" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="/prime.png" alt="" />
          <p className="text-xs text-gray-500">Free next-day delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
