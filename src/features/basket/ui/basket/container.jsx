import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../../module/actions";
import { selectBasket } from "../../module/selectors";
import { Basket } from "./component";

export const BasketContainer = ({ className }) => {

    const dispatch = useDispatch();
    const selector = useSelector(state => selectBasket(state));

    const clear = () => {
        console.log("clear");
        dispatch(clearBasket());
    };

    console.log(`selector`, selector);

    const basket = [];
    for (let key in selector){
        basket.push({name: key, qty: selector[key]});
    }

    return (<Basket className={className} basket={basket} clear={clear} />);
};