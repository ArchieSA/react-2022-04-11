import cl from 'classnames';
import st from './styles.module.scss';


export const Rate = ({ value }) => {
  
  return (
    <div className={st.root}>
      <div className={cl(st.reviews__stars, st.stars)} >
        <span style={{width: `${Math.round(value) * 20}%`}}></span>
        <span className={st.visuallyHidden}>Rating</span>
      </div>
    </div>
  )
};
