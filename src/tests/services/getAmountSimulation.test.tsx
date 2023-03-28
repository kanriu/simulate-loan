import { getAmountSimulation } from "../../services";

describe("Test in getAmounSimulation Service", () => {
  test("should return monthly amount", () => {
    const response = getAmountSimulation(19600, 48, 48);
    expect(response).toEqual({
      monthly_amount: 516.7915666666667,
      tea: 26.5612,
    });
  });
});
