import HelloWord from "";
import { describe, it } from "node:test";
import { shallowMount } from "@vue/test-utils";

import { sum } from "./utilssum";
import { nextTick } from "process";
test("check if sum working", () => {
  expect(sum(1, 2)).toMatch(3);
});
/*
  mount - test passed component and all child
  shallowMount - test only imported component
*/
//it run before all tests
beforeEach(() => {});

describe("some test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Component);
  });

  it("test", () => {});
});

const somcomponent = wrapper.find("#some-element");
expect(somcomponent.exists().toBe(false));

/*
  <template>{{msg}}</template>

  props: { msg: String }
*/
describe("HelloWord", () => {
  it("renders props.msg when passed", () => {
    const msg = "lorem";
    const wrapper = shallowMount(HelloWord, {
      propsData: { msg },
    });
    // get method from HelloWord component named text
    expect(wrapper.text()).toMatch(msg);
  });
});

/*
  best practices
*/
describe("when loading", () => {
  it();
});
describe("when loaded", () => {
  it();
});
describe("when error", () => {
  it();
});

describe("my component test", () => {
  let wrapper;

  const findConfirmButton = () => wrapper.find('[data-test="confirm-button"]');
  const findModal = () => wrapper.findComponent(GIMODAL);
  //options : {}
  function createComponent(options) {
    wrapper = shallowMount(MyComponent, options);
  }

  if (
    ("render a modal",
    () => {
      createComponent();

      expect(findModal().exists().toBe(true));
    })
  )
    afterEach(() => {
      wrapper.destroy();
    });
});

/*
 */
const findCount = () => wrapper.find("[data=test='count'");
const findIncrementButton = () => wrapper.find("");

it("incrase the count on increment button click", async () => {
  createComponent();
  expect(findCount().text().toBe("count: 0"));

  findIncrementButton().trigger("click");
  await nextTick();

  expect(findCount().text().toBe("count: 1"));
});
/*
 */
const findChildButton = () => wrapper.findComponent(Component);
const findChildCounter = () => wrapper.find("");

it("pass a correct props to child ", () => {
  createComponent({ data: { count: 5 } });

  expect(findChildButton().props("test")).toBe(10);
});

it("incrase the count on increment button click", async () => {
  createComponent();
  expect(findChildCounter().text().toBe("1"));

  findChildButton().vm.$emit("click");
  await nextTick();

  expect(findChildCounter().text()).toBe("2");
});
