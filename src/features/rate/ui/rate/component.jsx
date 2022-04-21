import { FaStar} from "react-icons/fa"
 
 export const Rate = ({ value }) => {
	
	const getStars = value => {
     let stars = [];
     for (let i = 0; i < value; i++) {
		  stars.push(
			 <FaStar 
				size={20}
				color={"#ffc107"}
				loading="lazy"
				key={i}
			 />
		  );
	  }
     return stars;
  	};
 
	return (
		<span>{getStars(value)}</span>
	)
}  
