import { getProductNameById } from '../index.js';


const mocks = [
  {
    description : `should correct find productName`,
    id          : `d75f762a-eadd-49be-8918-ed0daa8dd024`,
    result      : `Chicken tikka masala`
  },
  {
    description : `invalid id`,
    id          : `123`,
    result      : ``
  }
];


describe('Test getProductNameById', () => {
  mocks.forEach(m => it(m.description, () => {

    expect(getProductNameById(m.id)).toEqual(m.result);
  }));
});

// npm run test get-product-name-by-id.test.js
