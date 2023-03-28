import { render, screen } from "@testing-library/react";
import { CardSmall } from "../../components";

describe("Test in CardSmall Component", () => {
  test("should render props", () => {
    const mock = {
      primary: "Text 1",
      secondary: "Text 2",
    };
    render(<CardSmall {...mock} />);
    expect(screen.getByText(mock.primary).className).toBe(
      "text_regular size_3 m_5"
    );
    expect(screen.getByText(mock.secondary).className).toBe(
      "text_bold size_3 m_5"
    );
  });
  test("should render separator", () => {
    const mock = {
      primary: "Text 1",
      secondary: "Text 2",
      separator: true,
    };
    render(<CardSmall {...mock} />);
    expect(screen.getByRole("article").className).toBe(
      "card_small_container separator_vertical"
    );
  });
});
