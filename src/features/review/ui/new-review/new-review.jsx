import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { name: action.payload, text: "", rating: "" };
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
    rating: 0,
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
        <input
          value={state.rating}
          type="number"
          onChange={(event) => {
            dispatch({ type: "changeRating", payload: event.target.value });
          }}
        />
      </div>
    </div>
  );
};
