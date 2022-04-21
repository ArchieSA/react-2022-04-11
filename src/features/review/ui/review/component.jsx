import React from "react";
import { Rate } from "../../../rate/ui/rate/component";

export const Review = ({ user, text, rating }) => (
  <div>
    <span>Author: {user}</span>
    <span>{text}</span>
    <Rate value={rating} />
  </div>
);
