import { Menu } from "./component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsByRestId } from "../../module/selectors";
import { loadProducts } from "../../module/thunks/load-products";


export const MenuContainer = ({restaurantId}) => {
    const dispatch = useDispatch();
    const productIds = useSelector((state)=> selectProductsByRestId(state, restaurantId));

    useEffect(()=> dispatch(loadProducts(restaurantId)), [restaurantId]);
    return productIds?.length ? (<Menu productIds={productIds} />):(<span>...Loading</span>)
}