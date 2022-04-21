import { ReactComponent as Star } from "./imgs/star.svg";
export const Rate = ({ value }) => {
  return (
    <div>
      {[...Array(5)].map((item, index) => (
        <Star key={index} fill={index + 1 <= value ? "orange" : null} />
      ))}
    </div>
  );
};
