import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsProductsLoading, selectProducts } from "../../../menu/module/selectors";
import { loadProducts } from "../../../menu/module/thunks/load-products";
import { Products } from "./component";

export const ProductsContainer = () => {
    const dispatch = useDispatch();
    const isProductsLoading = useSelector(selectIsProductsLoading);
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(loadProducts());
    }, []);

    return isProductsLoading ? <span>Loading</span> : <Products products={products} />;
}