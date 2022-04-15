
export const Rate = ({ ratings }) => {

	const averageRating = ratings?.reduce((r, i) => r + i.rating, 0) / ratings?.length;
	
	return (

			<p>{averageRating.toFixed(1)}</p>	
  );
};