import { reviewSlice } from "..";
import { selectReviewIds, selectReviewsByRestId } from "../selectors";
export function loadReviews(restaurantId){
    return function (dispatch, getState){
        const reviewIds  = selectReviewIds(getState());
        const restReviews = selectReviewsByRestId(getState(), restaurantId);
        if (restReviews.every(id=> reviewIds.includes(id))) return;

        dispatch(reviewSlice.actions.startLoading(null));

        fetch(`/api/reviews?id=${restaurantId}`)
            .then(resp => resp.json())
            .then(reviews => {
                dispatch(reviewSlice.actions.finishLoading(reviews));
            })
            .catch(error => {dispatch(reviewSlice.failLoading(error))});
    }
}