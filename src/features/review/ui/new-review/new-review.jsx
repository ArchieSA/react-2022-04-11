import { useReducer, useState } from "react";
import styles from './styles.module.scss';
import { FaStar} from "react-icons/fa"

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
		rating: "Rating",
	});
	
	const [hover, setHover] = useState(null);

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
					
				{[...Array(5)].map((star, i) => {
					const ratingValue = i + 1;
						
					return (
						<label>

							<input
								className={styles.input}
								type="radio"
								name="rating"
								value={state.rating}
								onClick={() => {
									dispatch({ type: "changeRating", payload: ratingValue });
								}}	
							/>

							<FaStar
								className={styles.star}
								size={20}
								color={ratingValue <= (hover || state.rating) ? "#ffc107" : "#e4e5e9"}
								onMouseEnter={() => setHover(ratingValue)}
								onMouseLeave={() => setHover(null)}
							/>

						</label>
					);
				})}
			</div>
		</div>
  	);
};