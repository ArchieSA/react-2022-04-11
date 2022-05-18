
import styles from './styles.module.scss';

export const MenuItem = ({name, price, ingredients}) => {

    return (
        <li className={styles['menu-item']}>
            <div className={styles['menu-wrapper']}>
            <span className={styles['menu-item__name']}>{name}</span>
            <span>Price: {price} RUB</span>
                <div className={styles['menu-ingredients']}>
                <span>Composition:&nbsp;</span>{ingredients.map(el =><span className={styles['menu-ingredient']} key={el}> {el}</span>)}  
                </div> 
            </div>
        </li>
    )
}