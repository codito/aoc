import { sayHello } from "../src/1";

describe("2015.1", () => {
  it("should say hello", () => {
    expect(sayHello()).toBe("hello");
  });
});
