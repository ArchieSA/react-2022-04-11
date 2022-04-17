import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({ review }) => {
  return (
    <fieldset>
      <p>{review.user}</p>
      <p>{review.text}</p>
      <Rate value={review.rating} />
    </fieldset>
  );
};
