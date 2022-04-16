import { getRating } from ".";

const mocks = [
  {
    describe: `[5, 3] = 4`,
    reviews: [
      {
        id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
        rating: 5,
      },
      {
        id: '429dea85-11dd-4054-a31e-c60c92e17255',
        rating: 3,
      },
    ],
    result: 4
  }
];


describe(`getRating`, () => {
  mocks.forEach(m => {
    it(m.describe, () => {
      expect(getRating(m.reviews)).toEqual(m.result);
    })
  })
});

// npm run test get-rating.test.js
