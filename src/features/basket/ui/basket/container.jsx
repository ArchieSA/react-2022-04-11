import { useSelector, useDispatch} from 'react-redux';
import { Basket } from './component';
import { resetOrder } from '../../module/actions';

export const BasketContainer = ({className})=> {
const dispatch = useDispatch();
const products= useSelector(((state)=> state.basket));

const reset = ()=> {
  dispatch(resetOrder());
  console.log(products);
};

console.log(products);

return (<Basket className={className} products={products} resetOrder={reset}/>);
};

