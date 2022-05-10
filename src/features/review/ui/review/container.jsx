import React from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../module/selectors";
import { Review } from "./component";

export const ReviewContainer = ({ reviewId, ...props }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  return (
    <Review
      {...props}
      userId={review.userId}
      text={review.text}
      rating={review.rating}
    />
  );
};
