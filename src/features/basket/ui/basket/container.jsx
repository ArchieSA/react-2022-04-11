import { Basket } from "./component";
import classnames from "classnames";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetProducts } from "../../module/actions";

export const BasketContainer = ({className})=>{
    const dispatch = useDispatch();
    const reset =  useCallback(()=>dispatch(resetProducts()),[] );    
    const basket = useSelector(state=>state.basket);
    return <Basket reset={reset} products={basket} className={classnames(className)} />
}