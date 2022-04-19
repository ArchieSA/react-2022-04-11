import {ReactComponent as StarIcon} from './imgs/star.svg';
import styles from './styles.module.scss';


export const Rate = ({ value }) => {
   const rating = [];

   for (let i = 0; i < 5; i++) {
     i < value ? rating.push(<StarIcon key={i} className={styles.iconGold}/>) : rating.push(<StarIcon key={i} className={styles.iconGrey}/>)
   };

   return(
      <div>
         {rating}
      </div>
   );
};
