import { render, screen, fireEvent } from '@testing-library/react';
import { Basket } from '../component';
import { basket } from '../mocks';

describe('Test <Basket />', () => {
  it('should correct render title', () => {
    const funcMock = jest.fn();

    render(<Basket basket={basket} onClearBasket={funcMock} />);

    expect(screen.getByText("Your basket")).toBeInTheDocument();
  });

  it('should correct render clearbutton', () => {
    const funcMock = jest.fn();

    render(<Basket basket={basket} onClearBasket={funcMock} />);

    expect(screen.getByText("Clear basket")).toBeInTheDocument();
  });

  it('should correct click on clearbutton', () => {
    const funcMock = jest.fn();

    render(<Basket basket={basket} onClearBasket={funcMock} />);

    const button = screen.getByText("Clear basket");

    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(funcMock).toHaveBeenCalledTimes(1);
  });
});

// npm run test basket.test.jsx
