import { useEffect } from "react";
import { loadProducts } from "../../../menu/module/thunk/load-products";
import { Products } from "../../../menu/ui/products/component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAllProductsExist,
  selectIsProductLoading,
} from "../../../menu/module/selectors";

export const ProductsContainer = ({ productIds, restaurantId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsProductLoading);
  const isAllProductsExist = useSelector((state) =>
    selectIsAllProductsExist(state, restaurantId)
  );

  useEffect(() => {
    dispatch(loadProducts(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <Products productIds={productIds} isAllProductsExist={isAllProductsExist} />
  );
};
