export const SET_CURRENT_ROUTE = "route/SET_CURRENT_ROUTE";

export const setCurrentRoute = (url) => ({
  type: SET_CURRENT_ROUTE,
  payload: url,
});
