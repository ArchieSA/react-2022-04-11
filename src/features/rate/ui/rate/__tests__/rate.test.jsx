import { render, screen } from '@testing-library/react';
import { Rate } from '../component';

describe('Test <Rate />', () => {
  it('should correct render ', () => {
    render(<Rate value={4} />);

    expect(screen.getAllByAltText("star-gold")).toHaveLength(4);
  });
});

// npm run test rate.test.jsx
