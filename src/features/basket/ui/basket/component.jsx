import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ className , products, resetOrder}) => (
  
    <div className={classnames(styles.root, className)}>
      <span>Basket
      <div>
        {Object.entries(products)?.map(([key, value])=> <><div>{key}</div><div>{value}</div></>)}
      </div>
      </span>
     
    <button type='reset' onClick={resetOrder}>Reset</button>
    </div>

);
