import styles from './styles.module.scss'

export const BasketItem = ({name, quantity}) => {
   return(
      <div className={styles.root}>
         <span>{name}: </span>
         <span className={styles.qty}>{quantity}</span> 
      </div> 
      )
}