import { render, screen } from "@testing-library/react";
import { CardSmall } from "../../components";

describe("Test in CardSmall Component", () => {
  test("should render props", () => {
    const mock = {
      title: "Text 1",
      subtitle: "Text 2",
    };
    render(<CardSmall {...mock} />);
    expect(screen.getByText(mock.title).className).toBe(
      "text_regular size_3 m_5"
    );
    expect(screen.getByText(mock.subtitle).className).toBe(
      "text_bold size_3 m_5"
    );
  });
  test("should render separator", () => {
    const mock = {
      title: "Text 1",
      subtitle: "Text 2",
      verticalSeparator: true,
    };
    render(<CardSmall {...mock} />);
    expect(screen.getByRole("article").className).toBe(
      "card_small_container separator_vertical"
    );
  });
});
