export const getRating = (reviews) => {
  const rating = reviews?.reduce((sum, item) => sum + item.rating, 0) / reviews.length || 0;

  // return rating.toFixed(1);
  return Math.round(rating);
};
