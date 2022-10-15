import { mount } from "@vue/test-utils";
import Task from "@/components/Task.vue";
import getTaskPropsData from "./test-utils";

describe("Task Component unit tests: ", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Task, getTaskPropsData());

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders the task name", () => {
    const taskName = "Task 1";

    const wrapper = mount(Task, getTaskPropsData());

    expect(wrapper.html()).toContain(taskName);
  });

  test("calls deleteTask when the delete button is clicked", () => {
    const wrapper = mount(Task, getTaskPropsData());

    const deleteTask = jest.fn();

    wrapper.setMethods({
      deleteTask: deleteTask,
    });

    wrapper.find("button").trigger("click");

    expect(deleteTask).toHaveBeenCalled();
  });

  test("calls markComplete function when the checkbox is clicked", () => {
    const wrapper = mount(Task, getTaskPropsData());

    const markComplete = jest.fn();

    wrapper.setMethods({
      markComplete: markComplete,
    });

    wrapper.find("input.cb").trigger("click");

    expect(markComplete).toHaveBeenCalled();
  });
});
