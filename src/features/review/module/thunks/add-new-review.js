import { userSlice } from "../../../user/module";
import { reviewSlice } from "../index";
import { restaurantSlice } from "../../../restaurant/module";

export function addNewReview({ userName, text, rating, restaurantId }) {
  return function (dispatch) {
    const newUser = { id: Date.now(), name: userName };
    const newReview = {
      id: Date.now(),
      userId: newUser.id,
      text,
      rating,
    };

    dispatch(userSlice.actions.addUser(newUser));
    dispatch(reviewSlice.actions.addReview(newReview));
    dispatch(
      restaurantSlice.actions.addReviewToRestaurant({
        restaurantId,
        reviewId: newReview.id,
      })
    );
  };
}
