import { userSlice } from "..";

export function loadUsers() {
  return function (dispatch) {

    dispatch(userSlice.actions.startLoading());

    fetch(`/api/users`)
      .then(res => res.json())
      .then(users => {
        dispatch(userSlice.actions.finishLoading(users));
      })
      .catch(err => {
        dispatch(userSlice.actions.failLoading(err));
      });
  }
}
