import { fireEvent, render, screen } from '@testing-library/react';
import { SetRate } from '../component';


describe('Test <SetRate />', () => {
  it('should correct render ', () => {
    const onChangeMock = jest.fn();

    render(<SetRate rating={0} onChange={onChangeMock} />);

    const inputEl = screen.getAllByText(/icon-star/i)[0];

    fireEvent(
      inputEl,
      new MouseEvent(`click`, { bubbles: true, cancelable: true })
    );

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});

// npm run test set-rate.test.jsx
