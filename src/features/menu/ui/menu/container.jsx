import classnames from "classnames";
import { ProductContainer } from "../product/container";
import styles from "./styles.module.scss";

export const MenuContainer = ({ productIds, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.menuTitle}>Menu</span>
      {productIds.map((productId) => (
        <ProductContainer key={productId} productId={productId} className={styles.product} />
      ))}
    </div>
  );
};
