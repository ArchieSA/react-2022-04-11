import { Review } from "..//review/component";

export const Reviews = ( {reviews} ) => {
        return (
            <div>
                {reviews.map((review) => <Review review={review} key={review.id}/>)}
            </div>
        )

}