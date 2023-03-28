import { act, renderHook } from "@testing-library/react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";

describe("Test in useDebouncedValue Hook", () => {
  test("should return initial state", () => {
    const mockText = "Hello word";
    const { result } = renderHook(() => useDebouncedValue(mockText));
    expect(result.current).toBe(mockText);
  });
  test("should return no text after timeout ", () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useDebouncedValue());
    act(() => {
      jest.runAllTimers();
    });
    expect(result.current).toBe("");
    jest.useRealTimers();
  });
});
