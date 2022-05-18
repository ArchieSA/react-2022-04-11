import { MenuItemContainer } from "../menuItem/container"
import { useSelector } from "react-redux"
import { selectProductIds } from "../../module/selectors"
import styles from "./styles.module.scss"

export const MenuItems = () => {
    const ids = useSelector(selectProductIds)
    return (
        <div className={styles.root}>
            <h4>All Products</h4>
            <ul>
                {ids.map(id=> < MenuItemContainer key={id} id={id}/>)}
            </ul>
        </div>
    )
}