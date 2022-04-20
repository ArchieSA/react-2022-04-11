import {ReactComponent as Star} from './img/star.svg';
import './styles.scss';
export const Rate = ({ value }) =>{
   const arr = [];
   arr.length = 5;
   arr.fill(1);
   const rate = arr.map((el, indx)=> 
     <Star key={indx} 
      className={indx<=value? 'star star--active' : 'star'}/>
   )
     return <span> {rate} </span>;
} 

