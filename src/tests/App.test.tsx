import { render, screen } from "@testing-library/react";
import moment from "moment";
import App from "../App";
import { useService } from "../hooks/useService";

jest.mock("../hooks/useService");

describe("Text in App Home", () => {
  const mockInformation = {
    campaign_name: "Instacash",
    min_quota: 1,
    max_quota: 48,
    max_amount: 19600,
    min_amount: 1500,
    tea: Number((26.5612).toFixed(2)),
    payment_date: String(
      moment(new Date("2019-12-26T16:30:04.591Z")).locale("es").format("DD MMM")
    ),
    currency: "PEN",
    monthly_amount: Number((382.5912).toFixed(2)),
  };

  test("should render loading primary", () => {
    (useService as jest.Mock).mockReturnValue({
      information: mockInformation,
      response: { tea: 1, monthly_amount: 1 },
      loadingPrimary: true,
    });
    render(<App />);
    expect(screen.getByRole("article").className).toBe("loader_container");
  });
  test("should render loading secondary", () => {
    (useService as jest.Mock).mockReturnValue({
      loadingSecondary: true,
      information: mockInformation,
    });
    render(<App />);
    expect(screen.getByRole("article", { name: "loader" })).toBeTruthy();
  });
});
