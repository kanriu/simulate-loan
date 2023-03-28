import { addComma } from "../../utils/addComma";

describe("Test in addComma Utils", () => {
  test("should return with comma", () => {
    const response = addComma("S/ 19600");
    expect(response).toBe("S/ 19,600");
  });
});
