import star from "./imgs/star.svg";
import style from "./styles.module.scss";

//Как лучше поступить, - сделать одним компонентом или разделить на несколько?
export const Rate = ({ value, isEditable = false, changeRate = null }) => {
  return (
    <span>
      {Array.from({ length: isEditable ? 5 : value }).map((elem, index) => {
        let key = (new Date().getTime() + index).toString();

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
              key={key}
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
              loading="lazy"
              key={key}
              alt=""
            />
          );
        }
      })}
    </span>
  );
};

