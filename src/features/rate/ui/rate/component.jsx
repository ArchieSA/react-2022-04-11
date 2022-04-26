import star from "./imgs/star.svg";
import style from "./styles.module.scss";

export const Rate = ({ value, isEditable = false, changeRate = null }) => {
  return (
    <span>
      {Array.from({ length: isEditable ? 5 : value > 5 ? 5 : value }).map((elem, index) => {
        if (isEditable) {
          return (
            <img
              className={
                index < value
                  ? `${style["rate-img"]} ${style["rate-img-active"]}`
                  : style["rate-img"]
              }
              src={star}
              alt=""
              loading="lazy"
              data-testid="rate-element"
              key={index}
              onClick={() => {
                changeRate(index + 1);
              }}
            />
          );
        } else {
          return (
            <img
              className={`${style["rate-img-small"]} ${style["rate-img-active"]}`}
              src={star}
              data-testid="rate-element"
              loading="lazy"
              key={index}
              alt=""
            />
          );
        }
      })}
    </span>
  );
};
