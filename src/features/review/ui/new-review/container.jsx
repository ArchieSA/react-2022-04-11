import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NewReview } from "./component";
import { reviewSlice } from '../../module/index';


export const NewReviewContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();

  const onSubmit = useCallback((review) => { 
    dispatch(reviewSlice.actions.addReview(review))
  });

  return <NewReview {...props} onSubmit={onSubmit} />;
};
