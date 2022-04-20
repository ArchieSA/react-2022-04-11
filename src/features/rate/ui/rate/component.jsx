import Star from './imgs/star.svg';
import styles from './styles.module.scss';

export const Rate = ({value}) => {
    return (
        <span className={styles.actions}>
            {[...Array(value)].map((val, index) => (
                <img src={Star} key={index} loading="lazy" className={styles.icon} alt="Star"/>
            ))}
        </span>
    );
}

