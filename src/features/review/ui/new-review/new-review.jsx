import { useReducer } from "react";
import { Rate } from "../../../rate/ui/rate/component";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "changeName":
      return { ...state, name: payload, text: "", rating: 5 };
    case "changeText":
      return { ...state, text: payload };
    case "changeRating":
      return { ...state, rating: payload };
    default:
      return state;
  }
};

export const NewReview = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "DefaultName",
    text: "text",
    rating: 5,
  });

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
        Submit rating:
        <input
          value={state.rating}
          onChange={(event) => {
            dispatch({ type: "changeRating", payload: event.target.value });
          }}
        />
        <Rate value={state.rating} />
      </div>
    </div>
  );
};
