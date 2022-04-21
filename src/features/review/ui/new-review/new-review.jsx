import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName": return { name: action.payload, text: "", estimate: 1 };
    case "changeText": return { ...state, text: action.payload };
    case "addEstimate": return {...state, estimate: action.payload};
    default:
      return state;
  }
};

export const NewReview = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "Вася",
    text: "мне все не понравилось!",
    estimate: 1
  });

  return (
    <div>
      <div>
        <span>Name</span>
        <input type="text"
          value={state.name}
          onChange={(event) => {
            dispatch({ type: "changeName", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Review</span>
        <input type="text"
          value={state.text}
          onChange={(event) => {
            dispatch({ type: "changeText", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Estimate</span>
        <input type="number" min="1" max="5" step="1"
          value={state.estimate}
          onChange={(event) => {
            dispatch({ type: "addEstimate", payload: event.target.value });
          }}
        />
      </div>

    </div>
  );
};
