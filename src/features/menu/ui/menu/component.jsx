import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";

export const Menu = ({ menu, className }) => (
  <div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
    {menu.map((productID) => (
      <ProductContainer key={productID} productID={productID} />
    ))}
  </div>
);
