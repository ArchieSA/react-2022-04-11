import styles from "./styles.module.scss";
import { ReviewContainer } from "../review/container";
import { useDispatch, useSelector } from "react-redux";
import { loadReviews } from "../../module/thunks/load-reviews";
import { useEffect } from "react";
import { selectIsReviewsloading, selectReviewsByRestId } from "../../module/selectors";

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) => selectReviewsByRestId(state, restaurantId));
  const isLoading = useSelector(selectIsReviewsloading);
  useEffect(()=>{
    dispatch(loadReviews(restaurantId));
  },[restaurantId]);

  return isLoading  ? (<span>...Loading</span>):(<div>
    {reviewIds.length &&
      reviewIds.map((reviewId) => (
        <ReviewContainer
          key={reviewId}
          reviewId={reviewId}
          className={styles.review}
          userId = {reviewId.userId}
        />
      ))}
  </div>
)};
