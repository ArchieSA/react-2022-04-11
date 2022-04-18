import { Review } from "../../../review/ui/review/component";


export const Reviews = ({ reviews }) => {
  return (
	  <div>

      	{reviews.map((review) => (
        <Review key={review.id} review={review}/>
			))}
		  
    </div>
  );
};