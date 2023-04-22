import { act, fireEvent, render, screen } from "@testing-library/react";
import { AmountInput } from "../../components";

describe("Test in  Component", () => {
  const mock = {
    textLabel: "Ingrese un monto",
    amountMin: "1500",
    amountMax: "19600",
    amountInitial: "19600",
    hasError: false,
    setIsError: jest.fn(),
    onChange: jest.fn(),
  };
  test("should render min and max", () => {
    render(<AmountInput {...mock} />);
    expect(
      screen.getByText(
        `Mínimo S/ ${mock.amountMin} - Máximo S/ ${mock.amountMax}`
      )
    ).toBeTruthy();
  });
  test("should call onChange with data number", () => {
    jest.useFakeTimers();
    render(<AmountInput {...mock} />);

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
    render(<AmountInput {...mock} />);
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
      textLabel: "Ingrese un monto",
      amountMin: "1500",
      amountMax: "19600",
      amountInitial: "19600",
      hasError: true,
      setIsError: jest.fn(),
      onChange: jest.fn(),
    };
    render(<AmountInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "S/ 5000" } });
    expect(input.className).toBe("input_error");
    expect(
      screen.getByText(
        `Mínimo S/ ${mock.amountMin} - Máximo S/ ${mock.amountMax}`
      ).className
    ).toBe("text_regular size_4 mb_16 color_error");
  });
  test("should simulate handleKeyDown with no number", () => {
    render(<AmountInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "," });
  });
  test("should simulate handleKeyDown with dot", () => {
    render(<AmountInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "." });
  });
  test("should simulate handleKeyDown with ArrowRight", () => {
    render(<AmountInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "ArrowRight" });
  });
  test("should simulate handleKeyDown with ArrowLeft", () => {
    render(<AmountInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "ArrowLeft" });
  });
  test("should simulate handleKeyDown with Backspace", () => {
    render(<AmountInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "Backspace" });
  });
  test("should simulate handleKeyDown with number", () => {
    render(<AmountInput {...mock} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "1" });
  });
});
