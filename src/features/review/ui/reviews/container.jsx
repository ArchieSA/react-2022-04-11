import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectIsReviewLoading, selectReviewIds} from "../../module/selectors";
import { loadReviews } from "../../module/thunks/load-reviews";
import { Reviews } from "./component";

export const ReviewsContainer = ({restaurantId}) => {
   const dispatch = useDispatch();
   const reviewIds = useSelector((state) => selectReviewIds(state));
   const isLoading = useSelector((state) => selectIsReviewLoading(state));

   useEffect(() => {
      dispatch(loadReviews(restaurantId))
   }, [restaurantId]);

   if(!reviewIds?.length) {
      return null;
   };

   return isLoading ? (<span>loading</span>) : (
      <Reviews reviewIds={reviewIds} />
   )
}