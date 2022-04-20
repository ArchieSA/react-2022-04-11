import styles from './styles.module.scss';
import Minus from './imgs/thumb-down.svg'
import Plus from './imgs/thumb-up.svg'
import { useState } from "react";

export const Product = ({ product }) => {
  let [count, setCount] = useState(0);

  return (
    <div className={styles.product}>
      <span>{product.name}</span>
      <div className={styles.actions}>
        <button onClick={() => {setCount(count - 1)}} className={styles.action}>
          <img src={Minus} loading="lazy" className={styles.icon}/>
        </button>
        <span>{count}</span>
        <button onClick={() => {setCount(count + 1)}} className={styles.action}>
          <img src={Plus} loading="lazy" className={styles.icon}/>
        </button>
      </div>
    </div>
  );
};
