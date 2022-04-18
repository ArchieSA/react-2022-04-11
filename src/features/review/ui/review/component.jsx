import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({ text, rating, user }) => {
  return (
    <div>
      <div>
        <span>Пользователь: </span>
        <span>{user}</span>
      </div>
      <div>
        <span>Текст: </span>
        <span>{text}</span>
      </div>
      <div>
        <span>Рейтинг: </span>
        <span>
          <Rate value={rating} />
        </span>
      </div>
      <hr />
    </div>
  );
};
