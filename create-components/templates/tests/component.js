const componentTest = ({ componentName, filename }) => (`import { render, screen, fireEvent } from '@testing-library/react';
import { ${componentName} } from '../component';
import { ${filename} } from './mocks';

describe('Test <${componentName} />', () => {
  it('should correct render ', () => {
    const funcMock = jest.fn();

    render(<${componentName} />);

    const inputEl = screen.getByText(/icon-star/i);

    fireEvent(
      inputEl,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(funcMock).toHaveBeenCalledTimes(1);

    // expect(screen.getByText("bread")).toBeInTheDocument();
  });
});

// npm run test ${filename}.test.jsx
`);

module.exports = { componentTest };
