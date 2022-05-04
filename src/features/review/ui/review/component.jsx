import React from "react";
import classnames from "classnames";

import { Rate } from "../../../rate/ui/rate/component";

import styles from "./styles.module.scss";
import { UserContainer } from "../../../user/ui/user/container";

export const Review = ({ userId, text, rating, className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.header}>
        <UserContainer userId={userId} className={styles.author} />
        <Rate value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};
