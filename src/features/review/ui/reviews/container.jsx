import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Reviews } from './component';
import { loadReviews } from '../../module/thunks/load-reviews';
import { selectReviewIds, selectIsReviewsLoading, selectReviewById } from '../../module/selectors';
import { selectRestaurantModuleState } from '../../../restaurant/module/selectors';

export const ReviewsContainer = ({restaurantId})=> {
  const dispatch = useDispatch();
  const reviewIds = useSelector(selectReviewIds);
  const isLoading = useSelector(selectIsReviewsLoading);

  useEffect(()=> {
    dispatch(loadReviews(restaurantId));
   }, [restaurantId]);
 
   return(isLoading?
    <span>Loading</span>
   :(<Reviews reviewIds={reviewIds}/>));
};