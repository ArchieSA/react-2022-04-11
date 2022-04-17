import {Rate} from "../../../rate/ui/rate/component";

export const Review = ({ review }) => {
    return (
        <div>
            <div>User: {review.user} </div>
            <div>Text: {review.text}</div>
            <Rate value={review.rating} />
        </div>
    )
}