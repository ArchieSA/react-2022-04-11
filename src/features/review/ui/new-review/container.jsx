import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NewReview } from "./component";
import { addReview } from '../../module/actions';


export const NewReviewContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();

  const onSubmit = useCallback((review) => { }); // dispatch(addReview({ restaurantId, ...review })), [restaurantId]);

  return <NewReview {...props} onSubmit={onSubmit} />;
};
