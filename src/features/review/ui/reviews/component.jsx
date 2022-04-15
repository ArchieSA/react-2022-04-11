import { Rate } from "../../../rate/ui/rate/component";
import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
    const avgRate = function(reviews = 0){
        let avg = 0;
        if (reviews.length === 1){
            avg = reviews[0].rating;
        }
        if (reviews.length > 1){
            avg = reviews.reduce((a, b) => (a.rating + b.rating)) / reviews.length;
        }
        return avg;
    };
    return (
        <>
            <div><Rate rate={{rate: avgRate(reviews)}} /></div>
            {reviews.map(item => <Review key={item.id} review={item} />)}
        </>
    );
}