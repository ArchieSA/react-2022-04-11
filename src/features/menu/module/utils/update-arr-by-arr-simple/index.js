
/**
 * Update lastArr by newArr
 * @param {Array} lastArr 
 * @param {Array} newArr 
 */
export default function updateArrByArrSimple(lastArr, newArr) {
  if (!lastArr?.length) return newArr;

  let updatedArr = [...newArr];

  lastArr.forEach(item => {
    const res = updatedArr.find(updated => updated === item);
    if (!res) updatedArr.push(item);
  });

  return updatedArr;
};