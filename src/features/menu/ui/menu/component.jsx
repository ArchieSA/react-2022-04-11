import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";

export const Menu = ({ menu, className }) =>(
  <div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
    {menu.map((prodictId) => {
    return (
      <ProductContainer
        key={prodictId}
        productId={prodictId}
        className={styles.product}
      />
    )
    })}
  </div>
  );
