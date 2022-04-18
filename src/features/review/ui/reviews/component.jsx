import {Review} from '../review/component';

export const Reviews = ({ reviews })=> {

  let blockReviews = reviews.map((review)=> (
      <Review key={review.id} review={review} />
  ));

return(<div>{blockReviews}</div>);
};