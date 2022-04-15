

export const Review = ({ review }) => {
  return (
	  <article>
		  
		  	<p>{ review.rating }</p>
			<p>{ review.text }</p>
		  	<p>{ review.user }</p>
		  
		</article>
  );
};