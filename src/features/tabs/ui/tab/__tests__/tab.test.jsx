import { render, screen, fireEvent } from '@testing-library/react';
import { Tab } from '../component';

describe('Test <Tab />', () => {
  it('should correct render label', () => {

    render(<Tab label='Some restaurant' />);

    expect(screen.getByText("Some restaurant")).toBeInTheDocument();
  });

  it('should correct render', () => {
    const funcMock = jest.fn();

    render(<Tab label='Some restaurant' onTabSelect={funcMock}/>);

    const buttonEl = screen.getByText(/Some restaurant/i);

    fireEvent(
      buttonEl,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(funcMock).toHaveBeenCalledTimes(1);
  });
});

// npm run test tab.test.jsx
