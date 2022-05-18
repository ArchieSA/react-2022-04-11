import { createSelector } from "reselect";

export const selectReviewModuleState = (state) => state.review;

export const selectReviewById = (state, payload) =>
  selectReviewModuleState(state).entities[payload.reviewId];

export const createSelectReviewById = () =>
  createSelector(
    [selectReviewModuleState, (state, payload) => payload.reviewId],
    (review, reviewId) => review.entities[reviewId]
  );

export const selectReviewByIds = (state, reviewIds) =>
  reviewIds
    .map((reviewId) => selectReviewModuleState(state).entities[reviewId])
    .filter(Boolean);

export const selectReviewIds = (state) =>
  selectReviewModuleState(state).ids || [];

export const selectIsReviewsLoading = (state) =>
  selectReviewModuleState(state).isLoading;
