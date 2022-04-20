import cl from 'classnames';
import st from './styles.module.scss';


export const Rate = ({ value }) => {
  
  return (
    <div className={cl(st.reviews__rating, st.rating)}>
      <div className={cl(st.reviews__stars, st.rating__stars)} >
        <span style={{width: `${Math.round(value) * 20}%`}}></span>
        <span className={st.visuallyHidden}>Rating</span>
      </div>
    </div>
  )
};
