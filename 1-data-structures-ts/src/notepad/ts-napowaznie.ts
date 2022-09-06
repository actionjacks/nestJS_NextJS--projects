type Form = {
  firstName: string;
  lastName: string;
};
declare function renderForn(f: Form): Form;

renderForn({
  firstName: "jacek",
  lastName: "placel",
  // age: 123, - error
});

type StrincPropertyCheck<T, Expected> = Exclude<
  keyof T,
  keyof Expected
> extends never
  ? T
  : never;

declare function renderForn2<T extends Form>(
  f: StrincPropertyCheck<T, Form>
): Form;

const USER = {
  firstName: "jacek",
  lastName: "placel",
  age: 123,
};

//renderForn2(USER);
/*
  Argument of type '{ firstName: string; lastName: string; age: number; }' is not assignable to parameter of type 'never'.
*/

/*
  Object keys
*/
const nameToPoints = {
  jacek: 1,
  placek: 2,
  sracek: 3,
};

(Object.keys(nameToPoints) as Array<keyof typeof nameToPoints>).map((name) => {
  nameToPoints[name];
});
