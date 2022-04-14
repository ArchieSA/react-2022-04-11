import { Rate } from "../../../rate/ui/rate/component"

export const Reviews = ( {reviews}) => {

  return (
     <div>
        {reviews.map((review) => {
           return(
              <div key={review.id}>
                 <div>
                     {review.user}
                 </div>
                 <div>
                    {review.text}
                 </div>
                 <Rate value={review.rating}/>
              </div>
           )
        })}
     </div>
  )
}