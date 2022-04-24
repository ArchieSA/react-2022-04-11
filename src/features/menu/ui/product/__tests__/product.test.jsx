import { render, screen } from '@testing-library/react';
import { Product } from '../component';

describe(`test product component`, () => {
  it(`should correct render productName`, () => {
    render(<Product productName={"bread"} />);

    expect(screen.getByText("bread")).toBeInTheDocument();
  });
});

// npm run test product.test.jsx
