export const selectUserModuleState = (state) => state.user;

export const selectUserById = (state, payload) =>
  selectUserModuleState(state).entities[payload.userId];

export const selectUserIds = (state) => selectUserModuleState(state).ids;

export const selectIsUsersLoading = (state) =>
  selectUserModuleState(state).isLoading;
