import { Basket } from './component';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketArr } from '../../module/selectors';
import { clearBasket } from '../../module/actions';


export const BasketContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const basketArr = useSelector(selectBasketArr);

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };

  return (
    <Basket basketArr={basketArr} onClearBasket={handleClearBasket} {...props} />
  )
};
