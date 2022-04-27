import { arrFromBasket } from '../index.js';


const mocks = [
  {
    description : `should correct create arr from basket`,
    basket: {
      'id123': 11,
      'id124': 12,
      'id125': 13,
      'id126': 14,
    },
    result: [
      { id: 'id123', amount: 11 },
      { id: 'id124', amount: 12 },
      { id: 'id125', amount: 13 },
      { id: 'id126', amount: 14 },
    ]
  },
  {
    description : `should correct create arr from empty basket`,
    basket: {},
    result: []
  },
];


describe('Test arrFromBasket', () => {
  mocks.forEach(m => it(m.description, () => {

    expect(arrFromBasket(m.basket)).toEqual(m.result);
  }));
});

// npm run test arr-from-basket.test.js
