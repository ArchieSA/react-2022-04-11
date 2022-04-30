import { render, screen } from '@testing-library/react';
import { Reviews } from '../component';
import { reviews } from '../mocks';

describe('Test <Reviews />', () => {
  it('should correct render ', () => {
    render(<Reviews reviews={reviews} />);
    expect(screen.getByText("No burgers again. But Chef Pizza is the best one")).toBeInTheDocument();
  });

  it('should render with reviews empty', () => {
    const {container} = render(<Reviews reviews={[]} />);

    expect(container).toBeInTheDocument();
  });

  it('should render with reviews undefined', () => {
    const {container} = render(<Reviews reviews={undefined} />);

    expect(container).toBeInTheDocument();
  });
});

// npm run test reviews.test.jsx
