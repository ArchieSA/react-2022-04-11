import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Products } from "./component";
import { loadFullProducts } from "../../module/thunks/load-fullproducts";
import { selectIsProductsLoading, selectProducts } from "../../module/selectors";

export const ProductItems = () => {
  const dispatch = useDispatch();
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(loadFullProducts());
  }, []);

  return isProductsLoading ? <span>Loading</span> : <Products products={products} />;
}