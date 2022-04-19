import star from './imgs/star.svg'

export const Rate = ({ value }) => {
    const rate = [];
    for (let i=0; i<value;i++){
        rate.push(<img src={star}/>)
    }
   return <div>{rate}</div>;
};
