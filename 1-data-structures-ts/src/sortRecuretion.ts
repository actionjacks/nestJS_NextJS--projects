enum SortingDirection {
  Asc = "asc",
  Desc = "desc",
}

interface Class1 {
  name: string;
  date: Date;
}

interface Class2 {
  label: number;
  hightLabel: string;
}

const dataClass1: Class1[] = [
  {
    name: "lorem4",
    date: new Date(2022, 0o3, 27),
  },
  {
    name: "lorem2",
    date: new Date(2022, 0o2, 27),
  },
  {
    name: "lorem1",
    date: new Date(2022, 0o7, 22),
  },
  {
    name: "lorem10",
    date: new Date(2022, 0o1, 17),
  },
  {
    name: "lorem12",
    date: new Date(2022, 0o1, 17),
  },
  {
    name: "lorem11",
    date: new Date(2022, 0o1, 17),
  },
];
const dataClass2: Class2[] = [
  {
    label: 12,
    hightLabel: "loremlorem",
  },
  {
    label: 23,
    hightLabel: "loremlorem2",
  },
  {
    label: 920,
    hightLabel: "loremlorem3",
  },
];

function areClass2(dataToCheck: Class2[]): dataToCheck is Class2[] {
  const [data] = dataToCheck;
  return data.hightLabel !== "undefined";
}

const SORT = <T extends Class1 | Class2>(a: T, b: T) => {
  return (label: keyof T) => {
    return (sortDirection?: SortingDirection) => {
      const direction = sortDirection === SortingDirection.Asc ? -1 : 1;
      const left = a[label];
      const right = b[label];

      if (left < right) {
        if (typeof sortDirection !== "undefined") {
          return 1 * direction;
        }
        return 1;
      }
      if (left > right) {
        if (typeof sortDirection !== "undefined") {
          return -1 * direction;
        }
        return -1;
      }
      return 0;
    };
  };
};

const sortedClass1 = dataClass1.sort((a, b) => SORT(a, b)("date")());

const sortedClass2 = areClass2(dataClass2)
  ? dataClass2.sort((a, b) => SORT(a, b)("hightLabel")(SortingDirection.Desc))
  : [];
