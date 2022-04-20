import Star from './imgs/star.svg'

export const Rate = ({ value }) =>  (
    [...Array(value)].map((value, index) => (
        <img src={Star} alt={value} key={index} />
    ))
)