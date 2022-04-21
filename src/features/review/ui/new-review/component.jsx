import { useReducer } from "react";
import { SetRate } from "../../../rate/ui/set-rate/component";
import s from './styles.module.scss';


const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.payload, text: "" };
    case "changeRate":
      return { ...state, rate: action.payload };
    case "changeText":
      return { ...state, text: action.payload };
    
    default:
      return state;
  }
};

export const NewReview = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "DefaultName",
    rate: 0,
    text: "text",
  });

  const handleChangeRate = (value) => {
    dispatch({ type: "changeRate", payload: value });
  };


  return (
    <div className={s.root}>
      <div className={s.row}>
        <span className={s.label}>Name</span>
        <input
          value={state.name}
          onChange={(event) => {
            dispatch({ type: "changeName", payload: event.target.value });
          }}
        />
      </div>

      <SetRate rate={state.rate} onChange={handleChangeRate} />

      <div className={s.row}>
        <span className={s.label}>Review</span>
        <input
          value={state.text}
          onChange={(event) => {
            dispatch({ type: "changeText", payload: event.target.value });
          }}
        />
      </div>
    </div>
  );
};
