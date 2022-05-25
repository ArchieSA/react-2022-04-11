import { selectUserIds } from '../selectors';
import { userSlice } from '../index';

export function loadUsers() {
  return (dispatch, getState)=> {
   const userIds = selectUserIds(getState());

   if(userIds?.length){
     return;
   }

    dispatch(userSlice.actions.startLoading(null));

    fetch('/api/users')
    .then(response=> response.json())
    .then(menu=> {
      dispatch(userSlice.actions.finishLoading(menu));
    })
    .catch((error) => {
      dispatch(userSlice.actions.failLoading(error));
    });
  };
};