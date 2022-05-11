import { Menu } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../module/thunks/load-products";
import { useEffect } from "react";
import { selectIsProductsLoading, selectProductIds } from "../../module/selectors";
import { UiLoader } from "../../../../ui/UiLoader/component";

export const MenuContainer = ({ restaurantID, ...props }) => {
    const dispatch = useDispatch();
    const productIds = useSelector((state) => selectProductIds(state));
    const isLoading = useSelector(selectIsProductsLoading);

    useEffect(() => {
        dispatch(loadProducts(restaurantID))
    }, [restaurantID])

    return isLoading ? (
        <UiLoader />
    ) : (
        <Menu
            productIds={productIds}
            {...props}
        />
    );
};
