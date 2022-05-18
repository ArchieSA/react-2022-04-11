import { DishContainer } from "../dish/container";
import classnames from "classnames";
import styles from "./styles.module.scss";

export const DishList = ({ productIds, className }) => {

    return (
        <div className={classnames(styles.root, className)}>
            <div className={styles.dishesTitle}>Products List</div>
            {productIds.map(productId => <DishContainer productId={productId} />)}
        </div>
    );
}