import { userSlice } from "../../../user/module/index";

export const loadUsers = (userId) => {
  return function (dispatch) {
    userSlice.actions.startLoading(null);
    fetch(`api/users?id=${userId}`)
      .then((response) => response.json())
      .then((user) => {
        dispatch(userSlice.actions.finishLoading(user));
      })
      .catch((error) => {
        userSlice.actions.failLoading(error);
      });
  };
};
