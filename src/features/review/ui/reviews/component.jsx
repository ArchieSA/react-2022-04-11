import { Review } from "../review/component";

export const Reviews = ({ reviews }) => (
  <div className="reviews">
    {reviews.map((review) => <Review review={review} key={review.id} />)}
  </div>
);