<<<<<<< HEAD
import React from "react";
import { Review } from "../review/component";
import styles from "./styles.module.scss";

export const Reviews = ({ reviews }) => (
  <div>
    {reviews.length &&
      reviews.map((review) => (
        <Review
          key={review.id}
          user={review.user}
          text={review.text}
          rating={review.rating}
          className={styles.review}
        />
      ))}
  </div>
);
=======

>>>>>>> bd2ae2a8bd2c7584cc5177306733692f325c9a6a
