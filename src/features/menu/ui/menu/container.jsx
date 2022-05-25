import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './component';
import { loadProducts } from '../../module/thunks/load-products';
import { selectProductIds, selectIsProductsLoading } from '../../module/selectors';


export const MenuContainer = ({restaurantId})=> {

  const dispatch = useDispatch();
  const productIds = useSelector(selectProductIds);
  const isLoading = useSelector(selectIsProductsLoading);
  console.log(productIds);

  useEffect(()=> {
    dispatch(loadProducts(restaurantId));
   }, [restaurantId]);
 
   return(isLoading?
    <span>Loading</span>
   :(<Menu productIds={productIds}/>));
};