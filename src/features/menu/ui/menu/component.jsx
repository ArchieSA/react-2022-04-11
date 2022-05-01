import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";
import { useSelector } from "react-redux";
import { selectProductIds } from "../../module/selectors";

export const Menu = ({ menu, className }) => {

  return (<div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
    {menu.length &&
      menu.map((productId) => (
        <ProductContainer
          key={productId}
          productId={productId}
          className={styles.product}
        />
      ))}
  </div>)
};
