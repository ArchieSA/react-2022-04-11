import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {selectBasket} from "../../module/selectors";
import {clearBasket} from "../../module/actions";

export const BasketContainer = ({ className, ...props }) => {
    const dispatch = useDispatch();
    const basketData = useSelector((state) => selectBasket(state));

    const removeItems = useCallback(() => {
      dispatch(clearBasket(basketData));
    }, [basketData])

    return (
        <Basket
            className={className}
            basket={basketData}
            removeItems={removeItems}
        />
    );
};
