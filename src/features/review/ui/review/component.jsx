import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({ review: { user, text, rating } }) => (
  <div className="review">
    <h3>Name: {user}</h3>
    <p>{text}</p>
    
    <Rate rating={rating} />
  </div>
);