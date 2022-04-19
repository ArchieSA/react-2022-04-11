import React from "react";
import { Review } from "../review/component";

export const Reviews = ({ reviews }) => (
  <div>
    {reviews.length && reviews.map((review) => (
        <Review
          key={review.id}
          user={review.user}
          text={review.text}
          rating={review.rating}
        />
    ))}
  </div>
);
