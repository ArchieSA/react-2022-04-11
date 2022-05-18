import React from "react";
import { Link } from "react-router-dom";


export const NotFoundPage = () => {

  return (
    <>
      <div>Page not found</div>
      <Link to="restaurants">Go main</Link>
    </>
  )
}