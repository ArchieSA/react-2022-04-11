import { Product } from "../product/component";

export const Menu = ({ menu }) => {
  return (
    <div className="menu">
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
