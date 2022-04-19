import { Rate } from "../../../rate/ui/rate/component"

export const Review = ({review}) => {
    return(
        <ul>
            <li>{review.user}</li>
            <li>{review.text}</li>
            <Rate rating={review.rating}/>
        </ul>
    )
}