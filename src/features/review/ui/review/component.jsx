import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({ user, text, rating }) => {
  return (
    <article>
      <h3>{user}</h3>
      <p>{text}</p>
      <Rate value={rating} />
    </article>
  );
};
