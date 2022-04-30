import { ADD_REVIEW } from './actions';
import { normalizedReviews } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedReviews.reduce((acc, entity) => {
    acc[entity.id] = entity;
    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      const newReview = { id: Date.now(), ...action.payload };

      return {
        entities: { ...state.entities, [newReview.id]: action.payload },
        ids: [...state.ids, newReview.id]
      };
      
    default:
      return state;
  }
};
