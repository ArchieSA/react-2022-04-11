import { userSlice } from "..";
import { selectUserIds } from "../selectors";

export const loadUsers = ()=>{
    return function (dispatch, getState){
        const userIds = selectUserIds(getState());
        if (userIds?.length) return;
        dispatch(userSlice.actions.startLoading(null));
        fetch('api/users')
            .then(resp => resp.json())
            .then(users => dispatch(userSlice.actions.finishLoading(users)))
            .catch(error => dispatch(userSlice.actions.failLoading(error)));

    }
};