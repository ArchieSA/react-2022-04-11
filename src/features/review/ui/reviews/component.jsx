import React from "react";

import {Review} from "../review/component";

export const Reviews=({reviews})=>{

  return (
    <div>
      {reviews.map((reviews) => (
        <Review key={reviews.id} review={reviews} />
      ))}
    </div>
  );


};




