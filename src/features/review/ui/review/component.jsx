import React, { useContext, useState } from "react";
import classnames from "classnames";

import { Rate } from "../../../rate/ui/rate/component";

import styles from "./styles.module.scss";
import { ThemeContext } from "../../../theme/context";

export const Review = ({ user, text, rating, className }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.header}>
        <span className={styles.author}>{user}</span>
        <Rate value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};
