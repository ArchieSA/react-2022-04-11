import { useSelector } from "react-redux";
import { selectProductIngredientsById, selectProductNameById, selectProductPriceById } from "../../../menu/module/selectors";
import { Dish } from "./component";

export const DishContainer = ({ productId }) => {
    const productName = useSelector((state) =>
        selectProductNameById(state, productId)
    );

    const productPrice = useSelector((state) => 
        selectProductPriceById(state, productId)
    );

    const productIngredients = useSelector((state) => 
        selectProductIngredientsById(state, productId)
    );

    return (<Dish
        productName={productName}
        productPrice={productPrice}
        productIngredients={productIngredients}
    />);
}