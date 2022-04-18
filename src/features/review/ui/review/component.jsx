import {Rate} from '../../../rate/ui/rate/component';
import '../review/style.scss';
export const Review = ({review})=>{
    return(
        <li key={review.id} className="review">
        <span>{review.user} : </span>
        <span>{review.text}</span>
        <Rate value={review.rating}/>
        </li>
    )
};