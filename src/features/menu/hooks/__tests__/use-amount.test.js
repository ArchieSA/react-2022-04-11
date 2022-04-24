import { renderHook, act } from '@testing-library/react-hooks';
import { useAmount } from '../use-amount';

describe(`test useAmount`, () => {
  it(`should correct with 0`, () => {
    const { result } = renderHook(() => useAmount(1));
    expect(result.current.count).toBe(1);

    act(() => result.current.increment());
    expect(result.current.count).toBe(2);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(1);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });

  it(`should correct with 27`, () => {
    const { result } = renderHook(() => useAmount(27));
    expect(result.current.count).toBe(27);

    act(() => result.current.increment());
    expect(result.current.count).toBe(27);

    act(() => result.current.decrement());
    act(() => result.current.decrement());
    act(() => result.current.decrement());
    expect(result.current.count).toBe(24);

    act(() => result.current.increment());
    act(() => result.current.increment());  
    expect(result.current.count).toBe(25);

  });
});

// npm run test use-amount.test.js
