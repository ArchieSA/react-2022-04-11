import { useDispatch, useSelector} from "react-redux";
import { useCallback } from "react";
import { selectBasket } from "../../module/selectors";
import { clearBasket } from "../../module/actions";
import { Basket } from "./component";


export const BasketContainer = ( {className} ) => {
   const dispatch = useDispatch();
   const products = useSelector((state) => selectBasket(state));

   const basket = [];

   for (let key in products){
      basket.push({name: key, quantity: products[key]});
   };

   const basketClear = useCallback(() => {
      dispatch(clearBasket());
   }, []);

   return (
      <Basket className={className} basket={basket} basketClear={basketClear} />
   );
}