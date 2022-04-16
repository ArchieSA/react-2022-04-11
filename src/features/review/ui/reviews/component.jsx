import React from 'react';
import {Rate} from '../../../rate/ui/rate/component';
import './style.scss'; 
const getAverage = (data)=>{
    const allRates = data.reduce((acc, item)=> acc+=item.rating, 0);
    return allRates / data.length;
}
;
 export const Reviews = ({reviews})=>{
    
    return (
        <React.Fragment>
        <div> Average rating: {getAverage(reviews)}</div>
        <ul>
            {
            reviews.map(review => (
                    <li key={review.id} className="reviews">
                        <span>{review.user} : </span>
                        <span>{review.text}</span>
                        <Rate value={review.rating}/>
                    </li>
                    )
            )
            }
        </ul> 
        </React.Fragment>
    )
};