export const selectReviewModuleState = (state) => state.review;

export const selectReviewById = (state, payload) =>
  selectReviewModuleState(state).entities[payload.reviewId];

export const selectReviewIds = (state) => selectReviewModuleState(state).ids;

export const selectReviewByIds = (state, reviewIds) => {
  const allReviews = selectReviewModuleState(state).entities;
  const reviews = [];

  reviewIds.forEach(id => {
    if (allReviews[id]) reviews.push(allReviews[id]);
  });

  return reviews;
};
