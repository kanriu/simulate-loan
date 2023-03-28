import { render, screen } from "@testing-library/react";
import { Card } from "../../components";

describe("Test in Card Component ", () => {
  test("should render montlyAmount", () => {
    const mock = {
      montlyAmount: 0,
      isError: false,
    };
    render(
      <Card {...mock}>
        <div></div>
      </Card>
    );
    expect(screen.getByText(`S/ ${mock.montlyAmount}`)).toBeTruthy();
  });
  test("should render opacity on", () => {
    const mock = {
      montlyAmount: 0,
      isError: true,
    };
    render(
      <Card {...mock}>
        <div></div>
      </Card>
    );
    expect(screen.getByText(`S/ ${mock.montlyAmount}`).className).toBe(
      "text_bold size_1 mb_16 opacity"
    );
  });
});
