const numbers_ = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const total = numbers_.reduce((accum, prev, curr) => {
  accum += prev;
  return accum;
}, 0);

//
const persons = [
  { id: 1, name: "jacek", age: 29 },
  { id: 2, name: "Pola", age: 7 },
  { id: 3, name: "Ema", age: 32 },
  { id: 4, name: "Marcin", age: 35 },
  { id: 5, name: "Piotrek", age: 36 },
];

const totalAge = persons.reduce((totalAge, person) => {
  totalAge + person.age;
  return totalAge;
}, 0);

const arrayOfNames = persons.reduce((names: string[], person) => {
  return [...names, person.name];
}, []);

/* convert to new object
    new ob = [ 1: { id: 1, name: 'jacek', age: 29 }]
    Record<string, persons>

    console.log(ob["3"]) // { id: 3, name: "Ema", age: 32 }
*/
const findId = persons.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});

const maxAge = persons.reduce((acc: any, person) => {
  if (acc === null || person.age > acc) {
    return person.age;
  }
  return acc;
}, null);

const findPolaName = persons.reduce((acc: any, person) => {
  if (acc === null) return acc;
  if (person.name === "Pola") return person;
  return null;
}, null);

const allAre18 = persons.reduce((acc: any, person) => {
  if (!acc) return false;
  if (person.age > 18) {
    return true;
  }
}, true);

const any18 = persons.reduce((acc: any, person) => {
  if (acc) return true;
  if (person.age > 18) {
    return false;
  }
}, false);

const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "pending" },
  { id: 3, status: "cancelled" },
  { id: 4, status: "shipped" },
];

type Orders = {
  pending: number;
  cancelled: number;
  shipped: number;
};

const countStatus = orders.reduce(
  (acc, order) => {
    const key = order.status;
    return {
      ...acc,
      [order.status]: (acc[key as keyof Orders] || 0) + 1,
    };
  },
  {
    pending: 0,
    cancelled: 0,
    shipped: 0,
  }
);
