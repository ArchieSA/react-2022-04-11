import React from "react";
import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({ review: { user, text, rating } }) => (
  <div>
    <h4>Author: {user}</h4>
    <p>{text}</p>
    <Rate rating={rating}></Rate>
  </div>
);
