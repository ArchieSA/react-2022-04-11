import React from "react";
import styles from "./styles.module.scss";
import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviewIds }) => (
  <div>
    {reviewIds.length &&
      reviewIds.map((reviewId) => (
        <ReviewContainer
          key={reviewId}
          reviewId={reviewId}
          className={styles.review}
        />
      ))}
  </div>
);
