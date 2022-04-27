import classnames from "classnames";
import { useMemo } from "react";
import styles from "./styles.module.scss";

export const Basket = ({ className, basketData, dispatchEmptyBasket }) => {
  const memoisedHasBasketData = useMemo(() => Object.keys(basketData).length);
  const memoisedBasketData = useMemo(
    () =>
      Object.keys(basketData).map((key) => (
        <div key={key}>
          {[key]}: {basketData[key]}
        </div>
      )),
    [basketData]
  );

  return (
    <div className={classnames(styles.root, className)}>
      <span>Basket</span>

      {memoisedBasketData}

      <button
        className={classnames(styles.emptyBasketButton)}
        onClick={dispatchEmptyBasket}
        disabled={!memoisedHasBasketData}
      >
        Empty basket
      </button>
    </div>
  );
};
