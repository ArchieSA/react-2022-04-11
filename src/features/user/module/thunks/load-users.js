import { userSlice } from "../index";

export function loadUsers() {
  return function (dispatch) {
    dispatch(userSlice.actions.startLoading(null));

    fetch("/api/users")
      .then((response) => response.json())
      .then((reviews) => {
        dispatch(userSlice.actions.finishLoading(reviews));
      })
      .catch((error) => {
        dispatch(userSlice.actions.failLoading(error));
      });
  };
}
