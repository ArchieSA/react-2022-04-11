import React from "react";
import { Review } from "../review/component";

export const Reviews = ({ reviews }) => (
  <>
    <h3>This restaurant has following reviews</h3>
    <div>
      {reviews.map((review) => {
        return <Review review={review} key={review.id}></Review>;
      })}
    </div>
  </>
);
