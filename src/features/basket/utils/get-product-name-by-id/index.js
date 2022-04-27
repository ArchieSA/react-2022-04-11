import { restaurants } from '../../../../constants/fixtures';


export const getProductNameById = (id) => {
  let productName = ``;

  restaurants?.forEach(rest => {
    const result = rest?.menu?.find(prod => prod.id === id);
    if (result) return productName = result?.name || `Название не указано`
  });

  return productName;
};
