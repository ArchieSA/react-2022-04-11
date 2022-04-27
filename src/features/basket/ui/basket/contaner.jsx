import { Basket } from './component';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket } from '../../module/selectors';
import { clearBasket } from '../../module/actions';


export const BasketContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };

  return (
    <Basket basket={basket} onClearBasket={handleClearBasket} {...props} />
  )
};
