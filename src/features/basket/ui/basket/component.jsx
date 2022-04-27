import classnames from "classnames";
import { Product } from "../../../menu/ui/product/component";
import styles from "./styles.module.scss";

export const Basket = ({ basketItems ,className, clear }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span>Basket</span>
      <button onClick={clear}>Delete</button>
      <ul>
        {Object.entries(basketItems).map((item, index) => {
          return (
            <li key={index}>
              <span>{item[0]}</span>
              <span>{item[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
