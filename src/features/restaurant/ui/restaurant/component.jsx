import { useMemo } from "react";
import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ name, menu, reviews }) => {
  const average = useMemo(() => {
    const total = reviews.reduce((sum, { rating }) => sum + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <span>{name}</span>
      <Rate rate={average} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
