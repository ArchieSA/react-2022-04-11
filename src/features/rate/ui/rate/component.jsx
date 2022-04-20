
import Star from './img/star.svg';
import styles from './styles.module.scss';

export const Rate = ({ value }) => {

  const getStarsRate = value => {
    let stars = [];
    for( let i = 0; i < value; i++) {
      stars.push(<img src = {Star} key={i} className={styles.icon} loading='lazy'/>)
    }
    return stars;
  }
return (
  <div>
      <span>{value}</span>
      <span>{getStarsRate(value)}</span>
  </div>
)};

