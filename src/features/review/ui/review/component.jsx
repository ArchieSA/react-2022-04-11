import React from "react";
import {Rate} from "../../../rate/ui/rate/component";

export const Review = ({review}) => {
    const {user, text, rating} = review;
    return (
        <React.Fragment>
            <div>
                <span>Пользователь: </span>
                <span>{user}</span>
            </div>

            <div>
                <span>Отзыв: </span>
                <span>{text}</span>
            </div>

            <div>
                <span>Оценка: </span>
                <Rate value={rating} />
            </div>
        </React.Fragment>
    );
};
