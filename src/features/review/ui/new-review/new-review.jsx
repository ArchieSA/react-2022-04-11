import { useReducer } from "react";
import { Rate } from "../../../rate/ui/rate/component";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { name: action.payload, text: "", rate: 0 };
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
    rate: 0,
  });

  let rateItems = [];
  for (let i = 0; i < 5; i++) {
    rateItems.push();
  }

  let changeRate = (rate) => {
    dispatch({ type: "changeRate", payload: rate });
  };

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
        <Rate value={state.rate} isEditable={true} changeRate={(rate) => changeRate(rate)} />
      </div>
    </div>
  );
};
