import moment from "moment";
import { getInformation } from "../../services";

describe("Test in getInformation Service", () => {
  const tea = 26.5612;
  test("should return information", () => {
    const mock = {
      campaign_name: "Instacash",
      min_quota: 1,
      max_quota: 48,
      max_amount: 19600,
      min_amount: 1500,
      tea: Number(tea.toFixed(2)),
      payment_date: String(
        moment(new Date("2019-12-26T16:30:04.591Z"))
          .locale("es")
          .format("DD MMM")
      ),
      currency: "PEN",
      monthly_amount: Number((382.5912).toFixed(2)),
    };
    expect(mock).toEqual(getInformation());
  });
});
