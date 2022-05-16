import { userSlice } from "..";

export function loadUsers() {
   return function(dispatch) {
      dispatch(userSlice.actions.startLoading(null));

      fetch('/api/users')
      .then((response) => response.json())
      .then((users) => {
         dispatch(userSlice.actions.finishLoading(users))
      })
      .catch((error) => {
         dispatch(userSlice.actions.failLoading(error));
      });
   }
}