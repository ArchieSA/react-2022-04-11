export const selectReviewModuleState = (state) => state.review;

export const selectReviewById = (state, payload) =>
  selectReviewModuleState(state).entities[payload.reviewId];

export const selectReviewIds = (state) => selectReviewModuleState(state).ids;
