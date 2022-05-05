import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";

export const Menu = ({ menu, className }) => {
  return(
    <div className={classnames(styles.root, className)}>
      <span className={styles.menuTitle}>Menu</span>
      {menu.map((product) => (
        <ProductContainer
          key={product.id}
          productId={product}
          className={styles.product}
        />
      ))}
    </div>
  )
};


