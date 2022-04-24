import { useCallback, useState } from "react";

export const useAmount = (defaultValue) => {
  const [count, setCount] = useState(defaultValue || 0);

  const decrement = useCallback(() => setCount(current => {
    return current > 0 ? current - 1 : 0;
  }), []);

  const increment = useCallback(() => setCount(current => {
    return current < 25 ? current + 1 : current;
  }), []);

  return { count, decrement, increment };
};
