

export function arrFromBasket(obj) {
  let arr = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newObj = {
        id: key,
        amount: obj[key],
      }
      arr.push(newObj);
    }
  }
  return arr;
};
