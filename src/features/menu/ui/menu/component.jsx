import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";

export const Menu = ({ menu, className }) => (
  <div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
    {menu.map((productId) => (
      <ProductContainer
        key={productId}
        productId={productId}
        className={styles.product}
      />
    ))}
  </div>
);
