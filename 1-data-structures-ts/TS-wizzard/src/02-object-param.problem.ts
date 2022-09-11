import { expect, it } from "vitest";

type Params = {
  first: number;
  second: number;
};

export const addTwoNumbers = (params: Params) => {
  return params.first + params.second;
};

export const addTwoNumbers2 = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
