import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { selectProducts } from "../../module/selectors";
import { clearBasket } from "../../module/actions";

export const BasketContainer = ({ ...props }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => selectProducts(state));

    const clearBasketBtn = useCallback(() => {
        dispatch(clearBasket());
    }, [products]);


    return (
        <Basket {...props} products={products} clearBasket={clearBasketBtn}>  </Basket>
    );
};