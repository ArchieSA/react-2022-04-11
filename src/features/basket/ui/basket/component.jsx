import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ className, basket, clear }) => {

  return (
    <div className={classnames(styles.root, className)}>
      <span>Basket</span>
      <table>
        <tbody>
          {
            basket.map(item => {
              return <tr>
                <td>{item.name}</td>
                <td>{item.qty}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      <button onClick={clear}>Clear Basket</button>
    </div>
  );
};
