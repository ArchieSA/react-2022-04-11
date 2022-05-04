import { Review } from "./component";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../module/selectors";

export const ReviewContainer = ({ reviewId, ...props }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));
  return (
    <Review
      {...props}
      userId={review.userId}
      text={review.text}
      rating={review.rating}
    />
  );
};
