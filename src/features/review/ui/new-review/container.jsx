import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NewReview } from "./component";
import { addNewReview } from '../../module/thunks/add-new-review';


export const NewReviewContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();

  const onSubmit = useCallback((data) => { 
    console.log('data: ', data);
    const review = {
      restaurantId,
      userName   : data.userName,
      reviewText : data.text,
      rating     : data.rating
    };
    dispatch(addNewReview(review));
  }, []);

  return <NewReview {...props} onSubmit={onSubmit} />;
};
