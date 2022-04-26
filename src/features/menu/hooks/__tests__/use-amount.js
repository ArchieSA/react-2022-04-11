import { useAmount } from "../use-amount";
import { renderHook, act } from "@testing-library/react-hooks";

describe("test useAmount", () => {
  it("should return correct defaultValues", () => {
    const { result } = renderHook(() => useAmount(0));

    expect(result.current.count).toBe(0);
  });

  it("should correct increment", () => {
    const { result } = renderHook(() => useAmount(0));

    act(() => result.current.increment());

    expect(result.current.count).toBe(1);
  });

  it("should correct decrement", () => {
    const { result } = renderHook(() => useAmount(1));

    act(() => result.current.decrement());

    expect(result.current.count).toBe(0);
  });
});
