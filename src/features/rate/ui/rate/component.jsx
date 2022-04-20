import styles from './styles.module.scss';
import Star from './imgs/star.svg';

export const Rate = ({ value }) => {

    const makeStars = () => {
        let content = []
        for (let i = 0; i < value; i++) {
            content.push(
                <span key={i}>
                <img src={Star} loading="lazy" className={styles.icon} />
                </span>)
        }
        return content;
    }

    return (
        <>
            {makeStars()}
        </>
        );
};
