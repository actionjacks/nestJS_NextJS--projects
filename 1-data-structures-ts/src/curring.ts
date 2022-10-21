import { curry, compose, pipe } from "ramda";

const multiply_ = (x: number) => {
  return (y: number) => {
    return x + y;
  };
};
multiply_(2)(3);
const duble = multiply_(2);
duble(3); //6

//
const arrayofNumbers = [1, 2, 3, 4, 5, 6, 22];

function multiply(multiplier: number, value: number) {
  return multiplier * value;
}
const curriedMultyply = curry(multiply);

arrayofNumbers.forEach(curriedMultyply(2));

interface Bookshelf {
  title: string;
  pages: number;
  genre: string;
}
const bookshelf: Bookshelf[] = [
  { title: "Total Recall", pages: 654, genre: "business" },
];

const hasProperty = curry((property, value, obj) => obj[property] === value);
const getProperty = curry((propperty, obj) => obj[propperty]);

const getBussiness = (list: Bookshelf[]) =>
  list.filter(hasProperty("genre", "business"));

const getPages = (list: Bookshelf[]) => list.map(getProperty("pages"));

const countPages = (book: number[]) => book.reduce((acc, pages) => acc + pages);

pipe(getBussiness, getPages, countPages)(bookshelf);

// funktor
const triple = (x: number) => x * 3;

const Functor = (x: number) => ({
  map: (fn: (arg: any) => any) => Functor(fn(x)),
  valueOf: () => x,
});

const number_s = Functor(4);
number_s.map(triple).map(triple).valueOf();
