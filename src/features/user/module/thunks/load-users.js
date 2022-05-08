import {userSlice} from "../index";


export function loadUser(userId) {
    return function (dispatch, getState) {
        dispatch(userSlice.actions.startLoading(null));

        fetch(`/api/users?id=${userId}`)
            .then((response) => response.json())
            .then((user) => {
                dispatch(userSlice.actions.finishLoading(user));
            })
            .catch((error) => {
                dispatch(userSlice.actions.failLoading(error));
            });
    };
}
