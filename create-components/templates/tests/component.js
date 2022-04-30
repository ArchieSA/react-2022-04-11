const componentTest = ({ componentName, filename }) => (`import { render, screen, fireEvent } from '@testing-library/react';
import { ${componentName} } from '../component';
import { ${filename} } from './mocks';

describe('Test <${componentName} />', () => {
  it('should correct render title', () => {
    const funcMock = jest.fn();

    render(<${componentName} prop={} onFunc={funcMock} />);

    expect(screen.getByText("Your basket")).toBeInTheDocument();
  });

  it('should correct render clearbutton', () => {
    const funcMock = jest.fn();

    render(<${componentName} prop={} onFunc={funcMock} />);

    expect(screen.getByText("Clear basket")).toBeInTheDocument();
  });

  it('should correct click on clearbutton', () => {
    const funcMock = jest.fn();

    render(<${componentName} prop={} onFunc={funcMock} />);

    const button = screen.getByText("Clear basket");

    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(funcMock).toHaveBeenCalledTimes(1);
  });
});

// npm run test ${filename}.test.jsx
`);

module.exports = { componentTest };
