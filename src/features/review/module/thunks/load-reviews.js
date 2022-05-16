import { reviewSlice } from "..";

export function loadReviews(restaurantId) {
   return function(dispatch) {
      dispatch(reviewSlice.actions.startLoading(null));

      fetch(`/api/reviews?id=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => {
         dispatch(reviewSlice.actions.finishLoading(reviews))
      })
      .catch((error) => {
         dispatch(reviewSlice.actions.failLoading(error));
      });
   }
}