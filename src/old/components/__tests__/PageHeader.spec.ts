import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PageHeader from "../PageHeaderDescription/PageHeaderDescription.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(PageHeader);
    expect(wrapper.text()).toContain("Get Crypto Address");
  });
});
