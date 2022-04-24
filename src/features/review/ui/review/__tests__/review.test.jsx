import { render, screen } from '@testing-library/react';
import { Review } from '../component';


describe('Test <Review />', () => {
  it('should correct render', () => {

    render(<Review user="Genady" text="Feedback" rating="3" />);

    expect(screen.getByText("Genady")).toBeInTheDocument();
    expect(screen.getByText("Feedback")).toBeInTheDocument();
  });
});

// npm run test review.test.jsx
