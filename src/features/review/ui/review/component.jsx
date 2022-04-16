import { Rate } from "../../../rate/ui/rate/component"

export const Review = ({ review }) => {
    return (
        <div>
            <div>{review.user} (Review Rating: <Rate value={review.rating}/>)</div>
            <div>{review.text}</div>
        </div>
    )
}