import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <Review review={reviews[0]} />
    </div>
  );
};
