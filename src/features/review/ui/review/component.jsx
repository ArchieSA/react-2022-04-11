import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({review}) => {
    return (
        <div>
            {review.user};
            {review.text};
            <Rate value={review.rating}/>;
        </div>
    )
}