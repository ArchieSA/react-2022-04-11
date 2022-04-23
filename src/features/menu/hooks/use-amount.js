import { useCallback, useState } from "react";

export const useAmount = (defaultValue = 0) => {
  let [count, setCount] = useState(defaultValue);

  const decrement = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, [count]);

  const increment = useCallback(() => {
    if (count < 25) {
      setCount(count + 1);
    }
  }, [count]);

  return { count, increment, decrement };
};
