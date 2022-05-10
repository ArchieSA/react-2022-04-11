import React from 'react';
import cl from 'classnames';
import s from './styles.module.scss';
import { ReactComponent as StarActive } from '../icons/star-active.svg';
import { ReactComponent as IconStar } from '../icons/icon-star.svg';


const radioArray = [1, 2, 3, 4, 5];

export const SetRate = ({ rating, onChange }) => {

  return (
    <div className={s.root}>
      <span className={s.title}>Rate</span>

      {
        radioArray.map((value) => (
          <React.Fragment key={`radio-${value}`}>
            <input
              className   = {cl(s.input, s.visuallyHidden)}
              name        = "rating"
              value       = {value}
              onClick     = {(e) => onChange(+e.target.value)}
              id          = {`${value}-stars`}
              type        = "radio"
            />
            <label
              htmlFor     = {`${value}-stars`}
              className   = {cl(s.ratingLabel, s.label)}
              title       = "perfect"
            >
              {
                (value <= rating) ?
                <StarActive width="37" height="33"/> :
                  <IconStar width="37" height="33" />
              }
            </label>
          </React.Fragment>
        ))
      }
    </div>
  )
};
