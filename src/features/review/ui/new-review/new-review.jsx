import { useReducer } from "react";
import { SetRate } from "../../../rate/ui/set-rate/component";

import styles from "./styles.module.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { name: action.payload, text: "", rating: 0 };
    case "changeText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const NewReview = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "DefaultName",
    text: "text",
    rating: 0,
  });

  return (
    <div className={styles.root}>
      <span className={styles.title}>Set Your review here!</span>
      <div className={styles.formElement}>
        <span className={styles.elementTitle}>Name</span>
        <input
          value={state.name}
          onChange={(event) => {
            dispatch({ type: "changeName", payload: event.target.value });
          }}
        />
      </div>
      <div className={styles.formElement}>
        <span className={styles.elementTitle}>Review</span>
        <input
          value={state.text}
          onChange={(event) => {
            dispatch({ type: "changeText", payload: event.target.value });
          }}
        />
      </div>
      <div className={styles.formElement}>
        <span className={styles.elementTitle}>Rating</span>
        <input
          value={state.rating}
          onChange={(event) => {
            dispatch({ type: "setRating", payload: event.target.value });
          }}
        />
      </div>
    </div>
  );
};
