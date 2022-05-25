import { selectReviewIds } from '../selectors';
import { reviewSlice } from '../index';

export function loadReviews(restaurantId) {
  console.log(restaurantId);
  return (dispatch, getState)=> {
    const reviewsIds = selectReviewIds(getState());

    if (reviewsIds?.length) {
      return;
    }

    dispatch(reviewSlice.actions.startLoading(null));

    fetch(`/api/reviews?id=${restaurantId}`)
    .then(response=> response.json())
    .then(reviews=> {
      dispatch(reviewSlice.actions.finishLoading(reviews));
    })
    .catch((error) => {
      dispatch(reviewSlice.actions.failLoading(error));
    });
  };
};