import { useReducer } from "react";
import { Rate } from "../../../rate/ui/rate/component";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { name: action.payload, text: "", value: 0 };
    case "changeText":
      return { ...state, text: action.payload };
    case "changeRatting":
      return {value: action.payload};
    default:
      return state;
  }
};

export const NewReview = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "DefaultName",
    text: "text",
    value: 0,
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
        <Rate value= {state.value} onClick={(event)=>{
          dispatch({type: 'changeRatting', payload: event.target.id})}}/>
      </div>
    </div>
  );
};

