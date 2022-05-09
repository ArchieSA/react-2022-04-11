import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";
import { SpinnerLoader } from '../../../spinner/component';

export const Menu = ({ isLoading, productIds, className }) => {

  return  (
    <div className={classnames(styles.root, className)}>
      <span className={styles.menuTitle}>Menu</span>
      <SpinnerLoader isLoading={isLoading} text='меню'/>
      {
        !isLoading && productIds.map((productId) => (
          <ProductContainer
            key={productId}
            productId={productId}
            className={styles.product}
          />
        ))
      }
    </div>
  )
};
