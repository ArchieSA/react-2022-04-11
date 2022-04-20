import Star from './imgs/star.svg';

export const Rate = ({ value }) => {
  return (
    <div>
      for (i = 0; i < {value}; i++) {
        <div>{Star}</div>
      }
      <span>{value}</span>
    </div>
  );
};
