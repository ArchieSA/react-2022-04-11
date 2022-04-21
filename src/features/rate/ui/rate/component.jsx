import Star from "./images/star.svg";

import styles from "./styles.module.scss";

export const Rate = ({ value }) =>
  new Array(5)
    .fill(true)
    .map((_, index) => (
      <img
        key={index + new Date().getTime()}
        src={Star}
        alt="star icon"
        loading="lazy"
        className={`${styles.starIcon} ${
          index <= value - 1 && styles.selected
        }`}
      />
    ));
