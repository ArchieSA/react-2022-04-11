import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectIsReviewLoading, selectReviewIdsByRestaurantId } from '../../module/selectors';
import { loadReviews } from "../../module/thunks/load-reviews";
import { loadUsers } from '../../../user/module/thunks/load-users';
import { SpinnerLoader } from '../../../spinner/component';



export const ReviewsContainer = ({ restaurantId }) => {
  const
    dispatch = useDispatch(),
    isLoading = useSelector(selectIsReviewLoading),
    reviewIds = useSelector((state) => selectReviewIdsByRestaurantId(state, restaurantId));
  
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
  }, [restaurantId]);

  return isLoading ? (
    <SpinnerLoader isLoading={isLoading} text='отзывов'/>
  ) : (
    <Reviews reviewIds={reviewIds} />
  )
};
