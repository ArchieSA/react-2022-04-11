import { userSlice } from "../index";
import { selectUserIds } from "../selectors";

export function loadUsers() {
  return function (dispatch, getState) {
    const userIds = selectUserIds(getState());

    if (userIds?.length) {
      return;
    }

    dispatch(userSlice.actions.startLoading(null));

    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((users) => {
        dispatch(userSlice.actions.finishLoading(users));
      })
      .catch((error) => {
        dispatch(userSlice.actions.failLoading(error));
      });
  };
}
