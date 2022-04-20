import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { name: action.payload, text: "", rate: '' };
    case "changeText":
      return { ...state, text: action.payload };
    case "changeRate":
      return { ...state, rate: action.payload };
    default:
      return state;
  }
};

export const NewReview = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "DefaultName",
    text: "text",
    rate: "",
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
        <span>Rate</span>
        <input
          type="number"
          value={state.rate}
          min={1}
          max={5} //небольшая валидация, просто для себя=)
          onChange={(event) => {
            dispatch({ type: "changeRate", payload: +event.target.value });
          }}
        />
      </div>
    </div>
  );
};
