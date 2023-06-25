import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import PageHeader from "@/entities/PageHeader/ui/PageHeaderDescription/PageHeaderDescription.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(PageHeader);
    expect(wrapper.text()).toContain("Get Crypto Address");
  });
});
