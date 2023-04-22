import { fireEvent, render, screen } from "@testing-library/react";
import { QuotaSectionSlider } from "../../components";

describe("Test in SectionSlider Component", () => {
  const mock = {
    onChange: jest.fn(),
    title: "Prueba",
    min: 0,
    max: 48,
  };
  test("should render title", () => {
    render(<QuotaSectionSlider {...mock} />);
    expect(screen.getByText(mock.title).className).toBe("text_bold size_3");
  });
  test("should call onChange", () => {
    render(<QuotaSectionSlider {...mock} />);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider);
    expect(mock.onChange).toBeCalled();
  });
});
