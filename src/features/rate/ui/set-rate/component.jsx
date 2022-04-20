import React, { useState } from 'react';
import cl from 'classnames';
import st from './styles.module.scss';
import { ReactComponent as StarActive } from '../icons/star-active.svg';
import { ReactComponent as IconStar } from '../icons/icon-star.svg';

const radioArray = [1, 2, 3, 4, 5];


export const SetRate = ({ value }) => {

  const [rating, setRaiting] = useState(0);

  const handleClickRadio = (e) => {
    console.log('handleClickRadio: ', +e.target.value);
    setRaiting(+e.target.value);
  };


  return (
    <div className={cl(st.form, st.form__rating)}>
      {radioArray.map((value) => (
        <React.Fragment key={`radio-${value}`}>
          <input
            className={cl(st.ratingInput, st.visuallyHidden)}
            name="rating"
            value={value}
            onClick={handleClickRadio}
            id={`${value}-stars`}
            type="radio"
          />
          <label htmlFor={`${value}-stars`}
            className={cl(st.reviews__ratingLabel, st.ratingLbel)}
            title="perfect">
            {(value <= rating) ?
              <StarActive width="37" height="33"/> :
              <IconStar width="37" height="33"/>}
          </label>
        </React.Fragment>
      ))}
    </div>
  )
};
