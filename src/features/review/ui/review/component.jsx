import { Rate } from "../../../rate/ui/rate/component";


export const Review = ({ review }) => {
  return (
	  <article>
		  
		  	<Rate value={review.rating}></Rate>
			<p>{ review.text }</p>
		  	<p>{ review.user }</p>
		  
		</article>
  );
};