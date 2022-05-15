import { reviewSlice } from "..";
import { restaurantSlice } from "../../../restaurant/module";
import { userSlice } from "../../../user/module";

export function addNewReview({ restaurantId, userName, reviewText, rating }) {
  console.log('restaurantId, userName, reviewText, rating: ', restaurantId, userName, reviewText, rating);
  return function (dispatch) {

    const newUser = {
      id   : Date.now(),
      name : userName
    };
    dispatch(userSlice.actions.addUser(newUser));

    const newReview = {
      id     : Date.now(),
      userId : newUser.id,
      text   : reviewText,
      rating
    };
    dispatch(reviewSlice.actions.addReview(newReview));
    
    dispatch(restaurantSlice.actions.addReviewToRestaurant({ restaurantId, reviewId: newReview.id }))
  }
}
