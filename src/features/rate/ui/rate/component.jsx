import Star from './img/star.svg';
import styles from './styles.module.scss';
export const Rate = ({ value }) =>{
   const arr = [];
   arr.length = value;
   arr.fill(1);
   const rate = arr.map((el, indx)=> <img  key={indx} src={Star} alt="star" className={styles.star} loading='lazy'/>)
     return <span> {rate} </span>;
} 

