export const selectReviewModuleState = (state) => state.review;

export const selectReviewById = (state, payload) =>
  selectReviewModuleState(state).entities[payload.reviewId];

export const selectReviewsByIds = (state, payload) => {
  return Object.values(selectReviewModuleState(state).entities).filter((x) =>
    payload.ids.includes(x.id)
  );
};

export const selectReviewIds = (state) => selectReviewModuleState(state).ids;
