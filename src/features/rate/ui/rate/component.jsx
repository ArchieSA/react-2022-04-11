import React from "react";

export const Rate = ({ rating }) => (
  <div>{new Array(Math.ceil(rating)).fill("*").join("")}</div>
);
