import { act, renderHook } from '@testing-library/react'
import { useService } from '../../hooks'
import { getInformation } from '../../services'

describe('Test in useService Hook', () => {
  test('should return initial state', () => {
    // const { result } = renderHook(() => useService(false))
    // const { loadingPrimary, loadingSecondary, data, response, onChange } =
    //   result.current
    // expect(loadingPrimary).toBeTruthy()
    // expect(loadingSecondary).toBeFalsy()
    // expect(data).toBeUndefined()
    // expect(response).toBeUndefined()
    // expect(onChange).toEqual(expect.any(Function))
  })
  // test("should return loadingPrimary in false and response with data", () => {
  //   jest.useFakeTimers();
  //   const { result } = renderHook(() => useService(false));
  //   act(() => {
  //     jest.runAllTimers();
  //   });
  //   // expect(result.current.loadingPrimary).toBeTruthy();
  //   // expect(result.current.response).toEqual({});
  //   // expect(result.current.loadingSecondary).toBeTruthy();
  //   jest.useRealTimers();
  // });
  // test("should call onChange", () => {
  //   jest.useFakeTimers();
  //   const { result } = renderHook(() => useService(false));
  //   const { onChange } = result.current;
  //   act(() => {
  //     onChange(40, "quota");
  //   });
  //   act(() => {
  //     jest.runAllTimers();
  //   });
  //   expect(result.current.data).toEqual({ ...result.current.data });
  //   jest.useRealTimers();
  // });
})
