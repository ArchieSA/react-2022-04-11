import { Review } from "../review/component"

export const Reviews = ({reviews}) => {
   return reviews.map((review) => {
    return <Review review={review}/>
   });
}