import { useReducer } from "react";
import { ReactComponent as Star } from "../../../rate/ui/rate/imgs/star.svg";


const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { name: action.payload, text: "" , rate: 0 };
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
    rate: 0
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
        {[...Array(5)].map((item, index) => (
        <button onClick={() => {dispatch({type:"changeRate", payload: index + 1})}}>
            <Star key={index} fill={index + 1 <= state.rate ? "orange" : null} />
          </button>
      ))
      }
      </div>
    </div>
  );
};
