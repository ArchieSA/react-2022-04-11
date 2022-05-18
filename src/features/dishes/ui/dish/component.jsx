import classnames from "classnames";
import styles from "./styles.module.scss";

export const Dish = ({ productName, productPrice, productIngredients, className }) => {
    return (
        <div className={classnames(styles.root, className)}>
            <div><span className={classnames(styles.bold)}>Name: </span>{productName}</div>
            <div><span className={classnames(styles.bold)}>Price: </span>&euro;{productPrice}</div>
            <div>
                <span className={classnames(styles.bold)}>Ingredients: </span>
                {productIngredients.map((item, index, arr) => (index < arr.length - 1 ? <span>{item}, </span> : <span>{item}</span>))} 
            </div>
        </div>
    );
}