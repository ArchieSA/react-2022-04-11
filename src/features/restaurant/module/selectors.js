export const selectRestaurantModuleState = (state) => state.restaurant;

export const selectRestaurantById = (state, payload) =>
  selectRestaurantModuleState(state).entities[payload.restaurantId];

export const selectRestaurantIds = (state) =>
  selectRestaurantModuleState(state).ids;
