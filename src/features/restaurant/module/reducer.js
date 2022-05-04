import { normalizedRestaurants } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, entity) => {
    acc[entity.id] = entity;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
