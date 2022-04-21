import { Product } from "../product/component";
import s from './styles.module.scss';


export const Menu = ({ menu }) => {
  return (
    <div className={s.root}>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
