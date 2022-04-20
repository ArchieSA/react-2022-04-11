import Star from './imgs/star.svg'
import styles from './styles.module.scss';

export const Rate = ({ value }) => {
	
	const getStars = value => {
    let stars = [];
    for (let i = 0; i < value; i++) {
      stars.push(<img
					src={Star}
					loading="lazy"
					key={i}
					className={styles.icon}/>);
    }
    return stars;
  };
 
	return (
		<span>{getStars(value)}</span>
	)
}
