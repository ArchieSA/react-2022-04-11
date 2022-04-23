import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";

import styles from "./styles.module.scss";
import classnames from "classnames";

const MAX_RATING = 5;

export const Rate = ({ value, size = "medium" }) => (
  <div>
    {new Array(MAX_RATING).fill(null).map((_, index) => (
      <img
        src={index >= value ? Star : GoldStar}
        className={classnames(styles.star, styles[size])}
      />
    ))}
  </div>
);
