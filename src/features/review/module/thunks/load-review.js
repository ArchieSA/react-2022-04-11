import { reviewSlice } from "..";

export function loadReview(restaurantId) {
  return function (dispatch) {

    dispatch(reviewSlice.actions.startLoading());

    fetch(`/api/reviews?id=${restaurantId}`)
      .then(res => res.json())
      .then(reviews => {
        dispatch(reviewSlice.actions.finishLoading(reviews));
      })
      .catch(err => {
        dispatch(reviewSlice.actions.failLoading(err));
      });
  }
}
