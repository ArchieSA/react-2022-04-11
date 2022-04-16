import { Product } from "../product/component";

export const Menu = ({ menu }) => {
  console.log('menu: ', menu);
  
  return (
    <div>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
