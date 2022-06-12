import { mount } from "@vue/test-utils";
import Home from "@/pages/index";

// Check if the posting of a new todo works
describe("index.vue", () => {
  it("should post a new todo", async () => {
    const $store = {
      state: {
        todos: [],
      },
    };

    const wrapper = await mount(Home, {
      mocks: { $store },
    });
    await wrapper.get('[data-test="new-todo"]').setValue("new Todo");
    await wrapper.get('[data-test="new-todo"]').trigger("enter");
  });
});
