import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({className, basket, removeItems}) => {
    const basketArray = []
    Object.entries(basket).map(entry => {
        basketArray.push([entry[0], entry[1]]);
    });

    return (
        <div className={classnames(styles.root, className)}>
            <span>Basket</span>
            <hr/>
            <div>
                {basketArray.map((item, index) => (
                    <div key={index}>{item[0]} : {item[1]}</div>
                ))}
            </div>
            {basketArray.length ?
                <button onClick={removeItems}>Cancel Order</button> :
                <div>No Items</div>}
        </div>
    );
};
