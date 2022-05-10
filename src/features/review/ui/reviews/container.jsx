import { Reviews } from "../../../review/ui/reviews/component";
import React, { useEffect } from "react";
import { loadReviews } from "../../../review/module/thunk/load-reviews";
import { useDispatch, useSelector } from "react-redux";
import { selectIsReviewLoading } from "../../../review/module/selectors";

export const ReviewsContainer = ({ reviewIds, restaurantId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
  }, [restaurantId]);

  if (!isLoading) {
    return <span>Loading...</span>;
  }

  return <Reviews reviewIds={reviewIds} />;
};
