import { Product } from "../product/component";

export const Menu = ({ menu }) => {
  return (
    <div>
      Menu:
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
