import React from "react";

export const Review=({review})=>{
/* поставил тут в разметке заголовок и цитату, чтобы без стилей хоть как-то отличать компоненты... */

    return (
        <>
          <h6>{review.user}:</h6>
          <blockquote>{review.text}</blockquote>
        </>

    );
};
