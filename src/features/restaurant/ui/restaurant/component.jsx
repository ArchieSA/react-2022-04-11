import { Menu } from "../../../menu/ui/menu/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <span>{restaurant.name}</span>
      <Menu menu={restaurant.menu} />
    </div>
  );
};
