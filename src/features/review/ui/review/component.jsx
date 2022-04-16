import { Rate } from "../../../rate/ui/rate/component"

export const Review = ({ review }) => {
    return (
        <div>
            <div>{review.user}</div>
            <div>{review.text}</div>
            <Rate value={review.rating}/>
        </div>
    )
}