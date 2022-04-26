import { BasketItem } from "../basket-item/component"
import classnames from "classnames"

export const BasketItems = ({basket, className}) => (
   basket.map(({name, quantity}) => {
      return(
         <BasketItem name={name} quantity={quantity} />
         )
   })  
)