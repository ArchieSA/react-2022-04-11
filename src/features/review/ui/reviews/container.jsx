import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectIsReviewLoading, selectReviewIds } from '../../module/selectors';
import { loadReview } from "../../module/thunks/load-review";
import { loadUsers } from '../../../user/module/thunks/load-users';
import { SpinnerLoader } from '../../../spinner/component';



export const ReviewsContainer = ({ restaurantId }) => {
  const
    dispatch = useDispatch(),
    isLoading = useSelector(selectIsReviewLoading),
    reviewIds = useSelector(selectReviewIds);
  
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  useEffect(() => {
    dispatch(loadReview(restaurantId));
  }, [restaurantId]);

  return isLoading ? (
    <SpinnerLoader isLoading={isLoading} text='отзывов'/>
  ) : (
    <Reviews reviewIds={reviewIds} />
  )
};
