import { FullProduct } from "../full-product/component";
import styles from "./styles.module.scss";

export const Products = ({ products }) => (
    <div className={styles.root}>
        {products.map((product) => 
            <FullProduct 
                key={product.id}
                name={product.name}
                price={product.price}
                ingredients={product.ingredients}
            />
        )}
    </div>
)