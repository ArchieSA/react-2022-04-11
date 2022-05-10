import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductsContainer } from "../../../menu/ui/products/container";

export const Menu = ({ productIds, restaurantId, className }) => (
  <div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
    <ProductsContainer
      restaurantId={restaurantId}
      productIds={productIds}
      className={styles.product}
    />
  </div>
);
