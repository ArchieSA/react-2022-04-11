import { render, screen } from '@testing-library/react';
import { Header } from '../component';

describe('Test <Header />', () => {
  it('should correct render', () => {
    render(<Header />);

    const altInImg = screen.getByAltText(/logo/i)
    expect(altInImg).toBeInTheDocument();
  });
});

// npm run test header.test.jsx
