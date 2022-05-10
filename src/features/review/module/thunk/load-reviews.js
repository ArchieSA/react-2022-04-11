import { reviewSlice } from "../../../review/module/index";
import { selectRestaurantReviewIds } from "../../../restaurant/module/selectors";
import { selectIsReviewPresent } from "../../../review/module/selectors";

export function loadReviews(restaurantId) {
  return function (dispatch, getState) {
    const reviewIds = selectRestaurantReviewIds(getState(), restaurantId);

    const isAllReviewExist = reviewIds.every((reviewId) => {
      return selectIsReviewPresent(getState(), reviewId);
    });

    if (isAllReviewExist) return;

    dispatch(reviewSlice.actions.startLoading(null));
    fetch(`/api/reviews?id=${restaurantId}`)
      .then((response) => response.json())
      .then((review) => {
        dispatch(reviewSlice.actions.finishLoading(review));
      })
      .catch((error) => {
        dispatch(reviewSlice.actions.failLoading(error));
      });
  };
}
