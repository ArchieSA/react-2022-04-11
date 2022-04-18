import React from 'react';
import { Review } from '../review/component';

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
            reviews.map(review => <Review review={review}/>)
            }
        </ul> 
        </React.Fragment>
    )
};