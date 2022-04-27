import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "../../module/selectors";
import { Basket } from "./component";
import { cleanBasket } from "../../module/actions";



export const BаsketContainer = () => {
    const dispatch = useDispatch();

    const clean = ()=> {
        dispatch(cleanBasket());
    }
    let basket = useSelector((state)=>selectBasket(state));
   
    return (
        <Basket basket={basket} clean={clean}/>
    )
}