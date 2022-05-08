import { Reviews} from "./component";
import { useDispatch, useSelector } from "react-redux";
import {
    selectIsReviewsLoading,
    selectReviewIds,
} from "../../module/selectors";
import { useEffect } from "react";
import {loadReviews} from "../../module/thunks/load-reviews";

export const ReviewsContainer = ({restaurantId}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsReviewsLoading);
    const reviewIds = useSelector(selectReviewIds);

    useEffect(() => {
        dispatch(loadReviews(restaurantId));
    }, []);

    return isLoading ? (
        <span>Loading</span>
    ) : (
        <Reviews reviewIds={reviewIds} />
    );
};
