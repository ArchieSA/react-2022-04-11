import { render, screen } from '@testing-library/react';
import { BasketItem } from '../component';

const product = {
  id: 'd75f762a-eadd-49be-8918-ed0daa8dd024',
  amount: 5
};


describe('Test <BasketItem />', () => {
  it('should correct render productName', () => {

    render(<BasketItem productId={product.id} productAmount={product.amount} />);

    expect(screen.getByText("Chicken tikka masala")).toBeInTheDocument();
  });

  it('should correct render product amount', () => {

    render(<BasketItem productId={product.id} productAmount={product.amount} />);
    const elem = screen.getByTestId("amount");

    expect(elem.textContent.replace(/\D/g, ``)).toBe("5");
  });
});

// npm run test basket-product.test.jsx
