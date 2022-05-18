import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";
import { useSelector } from "react-redux";
import { selectProductIds } from "../../module/selectors";

export const Menu = ({ productIds, className }) => (
  <div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
    {productIds.map((productId) => (
      <ProductContainer
        key={productId}
        productId={productId}
        className={styles.product}
      />
    ))}
  </div>
);
