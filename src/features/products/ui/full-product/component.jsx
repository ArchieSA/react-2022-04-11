import styles from "./styles.module.scss";

export const FullProduct = ({ name, price, ingredients }) => (
    <div className={styles.root}>
        <div className={styles.row}>name: {name}</div>
        <div className={styles.row}>price: {price}</div>
        <div className={styles.row}>ingredients: {ingredients.map((ingredient, index) => (
            <div key={index}>{ingredient}</div>
        ))}</div>
    </div>
)