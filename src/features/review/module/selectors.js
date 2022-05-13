import { createSelector } from "reselect";
import { selectRestaurantModuleState } from "../../restaurant/module/selectors";

export const selectReviewModuleState = (state) => state.review;

export const selectReviewById = (state, payload) =>
  selectReviewModuleState(state).entities[payload.reviewId];

export const createSelectReviewById = () =>
  createSelector(
    [selectReviewModuleState, (state, payload) => payload.reviewId],
    (review, reviewId) => review.entities[reviewId]
  );

export const selectReviewByIds = (state, reviewIds) =>
  reviewIds.map(
    (reviewId) => selectReviewModuleState(state).entities[reviewId]
  );

export const selectReviewIds = (state) => selectReviewModuleState(state).ids;

export const selectIsReviewsloading = ( state ) => selectReviewModuleState(state).isLoading;

export const selectReviewsByRestId = (state, restaurantId) =>  selectRestaurantModuleState(state).entities[restaurantId].reviews;