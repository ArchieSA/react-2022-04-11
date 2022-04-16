const MAX_VALUE = 5;

export const Rate = ({ value }) => {
  return (
    <meter value={value} min="0" max={MAX_VALUE}>
      {value} out of {MAX_VALUE}
    </meter>
  );
};
