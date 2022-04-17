import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({ review }) => {

    return (
      <div>
        <p>{review.user}</p>
        <p>{review.text}</p>
        <Rate value={review.rating} />
      </div>)
}