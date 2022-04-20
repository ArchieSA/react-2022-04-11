import { useReducer } from "react";
import './new-review.scss';

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { name: action.payload, text: '', raiting:'' };
    case "changeText":
      return { ...state, text: action.payload };
      case "setRaiting":
      return { ...state, raiting: action.payload };
    default:
      return state;
  }
};

export const NewReview = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "DefaultName",
    text: "text",
    raiting: ''
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
        <span>Rating</span>
        <input
          type="number"
          min="0"
          max="5"
          value={state.raiting}
          onChange={(event) => {
            dispatch({ type: "setRaiting", payload: event.target.value });
          }}
        />
      </div>
    </div>
  );
};
