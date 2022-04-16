import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({ review }) => {

  return (
    <>
      <Rate value={review.rating} />
      <div>{review.user}</div>
      <div>{review.text}</div>
    </>
  )
};
