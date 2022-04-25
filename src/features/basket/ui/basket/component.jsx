import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span>Basket</span>
    </div>
  );
};
