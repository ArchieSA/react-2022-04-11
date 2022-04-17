import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.user} review={review} />
      ))}
    </div>
  );
};
