import { act, fireEvent, render, screen } from "@testing-library/react";
import { TextInput } from "../../components";

describe("Test in TextInput Component", () => {
  const mock = {
    min: "1500",
    max: "19600",
    initial: "19600",
    isError: false,
    setIsError: jest.fn(),
    onChange: jest.fn(),
  };
  test("should render min and max", () => {
    render(<TextInput {...mock} />);
    expect(
      screen.getByText(`Mínimo S/ ${mock.min} - Máximo S/ ${mock.max}`)
    ).toBeTruthy();
  });
  test("should call onChange with data number", () => {
    jest.useFakeTimers();
    render(<TextInput {...mock} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "S/ 5000.00" } });
    act(() => {
      jest.runAllTimers();
    });
    expect(mock.onChange).toBeCalledWith(5000, "amount");
    jest.useRealTimers();
  });
  test("should call onChange with data no number", () => {
    jest.useFakeTimers();
    render(<TextInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "S/ ." } });
    act(() => {
      jest.runAllTimers();
    });
    expect(mock.onChange).toBeCalledWith(1, "amount");
    jest.useRealTimers();
  });

  test("should render isError true and call onChange with no dot", () => {
    const mock = {
      min: "1500",
      max: "19600",
      initial: "19600",
      isError: true,
      setIsError: jest.fn(),
      onChange: jest.fn(),
    };
    render(<TextInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "S/ 5000" } });
    expect(input.className).toBe("input_error");
    expect(
      screen.getByText(`Mínimo S/ ${mock.min} - Máximo S/ ${mock.max}`)
        .className
    ).toBe("text_regular size_4 mb_16 color_error");
  });
  test("should simulate handleKeyDown with no number", () => {
    render(<TextInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "," });
  });
  test("should simulate handleKeyDown with dot", () => {
    render(<TextInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "." });
  });
  test("should simulate handleKeyDown with ArrowRight", () => {
    render(<TextInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "ArrowRight" });
  });
  test("should simulate handleKeyDown with ArrowLeft", () => {
    render(<TextInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "ArrowLeft" });
  });
  test("should simulate handleKeyDown with Backspace", () => {
    render(<TextInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "Backspace" });
  });
  test("should simulate handleKeyDown with number", () => {
    render(<TextInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "1" });
  });
});
