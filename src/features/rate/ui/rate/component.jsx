import GoldStar from './imgs/star-gold.svg';
import GreyStar from './imgs/star-grey.svg';
import Styles from './styles.module.scss';

export const Rate = ({ value }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(<img className={Styles.icon} src={(i <= value) ? GoldStar : GreyStar} loading="lazy" alt="svg icon of the star" />);
    }

    return (
        <div>
            {stars}
        </div>
    );
};
