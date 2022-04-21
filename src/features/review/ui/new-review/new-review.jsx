import Star from "./images/star.svg";
import { useReducer, useState } from "react";

import styles from "./styles.module.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { name: action.payload, text: "", rating: 1 };
    case "changeText":
      return { ...state, text: action.payload };
    case "changeRating":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const NewReview = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "DefaultName",
    text: "text",
    rating: 1,
  });

  const [currentFilledStar, setCurrentFilledStar] = useState(0);

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          value={state.name}
          onChange={(event) => {
            dispatch({ type: "changeName", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Review</span>
        <input
          value={state.text}
          onChange={(event) => {
            dispatch({ type: "changeText", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Rating</span>
        {new Array(5).fill(true).map((_, index) => (
          <img
            key={index + new Date().getTime()}
            src={Star}
            alt="star"
            onMouseOver={() => setCurrentFilledStar(index)}
            className={`${styles.starIcon} ${
              index <= currentFilledStar && styles.selected
            }`}
            onClick={() => {
              dispatch({
                type: "changeRating",
                payload: index + 1,
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};
