function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
}
myForEach(["a", "b", "c"], (v) => console.log(`forEaach ${v}`));

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a: T[], v) => {
    const fo = filterFunc(v);
    return fo ? [...a, v] : a;
  }, []);
}
console.log(myFilter([1, 2, 4, 4], (v) => v % 2 === 0));

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}
console.log(myMap([1, 2, 4, 4], (v) => (v * 2).toString()));
