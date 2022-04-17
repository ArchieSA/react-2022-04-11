import React from "react";

export const Rate = ({rate})=>{
/* поставил тут в разметке кнопку только потому, чтобы без стилей хоть как-то отличать компонент... */

    if (rate.length<1) {
        return (<button>нет рейтинга</button>) /* если оценок еще нет! */
    }

    /* иначе считаем среднюю оценку: */
    const averageRating=rate.reduce(function(prev,elem,ind,arr){return prev+elem.rating},0)/rate.length;

    /* и отрежем лишнюю дробь при отображении */
    return (
    <button>{averageRating.toFixed(1)}</button>
    );
};
