import Star from '../imgs/star.svg';
import StarActive from '../imgs/star-active.svg';

export const Rate = ({ value, onClick }) => {
  return (
    <div onClick = {onClick}>
      {new Array(5).fill(null).map((_, index)=> (<img key = {index} id = {index + 1} src = {index >= value ?  Star : StarActive}/>))}
    </div>
  );
};
