let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} ${greeting}`);
};

let logDetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };
logDetails = (jacek: person) => {
  console.log(`${jacek.name} ${jacek.age}`);
};
