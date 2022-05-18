import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsProductsLoading, selectProductIds} from "../../../menu/module/selectors";
import { loadProducts } from "../../../menu/module/thunks/load-products";
import { selectRestaurantIds } from "../../../restaurant/module/selectors";
import { loadRestaurants } from "../../../restaurant/module/thunks/load-restarants";
import { DishList } from "./component";

export const DishListContainer = () => {
    const dispatch = useDispatch();

    const restaurantIds = useSelector(selectRestaurantIds);
    const productIds = useSelector(selectProductIds);
    const isProductsLoading = useSelector(selectIsProductsLoading);
    
    useEffect(() => {
        dispatch(loadRestaurants());
    }, [dispatch]);

    useEffect(() => {
        restaurantIds.forEach(restaurantId => {
            dispatch(loadProducts(restaurantId));
        });
    }, [dispatch, restaurantIds]);

    return (isProductsLoading || !productIds.length) ? <span>Loading</span> : <DishList productIds={productIds} />;

}