import React from "react";
import { useSelector } from "react-redux";
import { selectIsReviewsLoading } from "../../module/selectors";
import { Reviews } from "./component";

export const ReviewsContainer = (props) => {
  const isReviewLoading = useSelector(selectIsReviewsLoading);
  return isReviewLoading ? <span>Loading...</span> : <Reviews {...props} />;
};
