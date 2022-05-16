import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectIsProductLoading, selectPeoductIdsByRestaurantId } from "../../module/selectors";
import { loadProducts } from "../../module/thunks/load-products";
import { Menu } from "./component"

export const MenuContainer = ({restaurantId, className}) => {
   const dispatch = useDispatch();
   const productIds = useSelector((state) => selectPeoductIdsByRestaurantId(state, restaurantId));
   const isLoading = useSelector((state) => selectIsProductLoading(state))

   useEffect(() => {
      dispatch(loadProducts(restaurantId));
   }, [restaurantId])

   if(!productIds?.length) {
      return null;
   }

   return isLoading ? (
      <span>loading</span>
   ) : (
      <Menu 
         productIds={productIds}
         className={className}
      />
   )
}