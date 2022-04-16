import { Review } from "../review/component"

export const Reviews = ({ reviews }) => {
    return (
        <div>
            {reviews.map(( review ) => {
                return (
                    <Review key={review.id} review={review} />
                )
            })}
        </div>
    )
}