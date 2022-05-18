import { NewReview } from "./component";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addNewReview } from "../../module/thunks/add-new-review";

export const NewReviewContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();

  const onSubmit = useCallback((review) => {
    dispatch(addNewReview({ ...review, restaurantId }));
  }, []);

  return <NewReview {...props} onSubmit={onSubmit} />;
};
