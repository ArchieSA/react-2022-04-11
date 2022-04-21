import stars from "./star.svg";

/* ох и пришлось помучаться, чтобы без циклов обойтись!! ведь eval в jsx не работает... */

export const Rate = ({ value }) => {

    const allStars=`<img src=${stars} alt="star" height="10px"/>`.repeat(value);

    return <span dangerouslySetInnerHTML={{__html: allStars}}></span>

}