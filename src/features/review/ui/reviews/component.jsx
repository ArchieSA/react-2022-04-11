import {Review} from '../review/component';
import {Rate} from '../../../rate/ui/rate/component';

export const Reviews = ({ reviews })=> {

  let blockReviews = reviews.map((review)=> (
      <><Review key={review.id} review={review} />
        <Rate value={review.rating}/>
      </>
  ));
return(
  <>
  <div>{blockReviews}</div>
  </>
);
};