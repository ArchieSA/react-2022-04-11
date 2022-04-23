import React, { useState } from "react";
import { ReactComponent as Star } from "./imgs/star.svg";
import styles from "./styles.module.scss";

export const Rate = ({ value }) => {
  return (
    <div className={styles.container}>
      {[...Array(5)].map((_, i) => (
        <div key={i} className={styles.star}>
          <Star
            className={value <= i ? styles.starGrey : styles.starHighlite}
          />
        </div>
      ))}
    </div>
  );
};
