import classnames from "classnames";
import { Product } from "../product/component";
import styles from "./styles.module.scss";

export const Menu = ({ menu, className }) => (
  <div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
    {menu.map((product) => (
      <Product
        key={product.id}
        productName={product.name}
        className={styles.product}
      />
    ))}
  </div>
);
