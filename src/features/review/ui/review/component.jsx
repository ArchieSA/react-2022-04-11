import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({ user, text, rating }) => {
  return (
    <>
      <div>User: {user}</div>

      <div>Text: {text}</div>
      <Rate rate={rating} />
      <hr />
    </>
  );
};
