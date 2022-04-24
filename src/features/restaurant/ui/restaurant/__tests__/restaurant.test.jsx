import { render, screen } from '@testing-library/react';
import { Restaurant } from '../component';
import { restaurant } from '../mocks';

describe('Test <Restaurant />', () => {
  it('should correct render ', () => {

    render(<Restaurant restaurant={restaurant} />);
    
    expect(screen.getByText(/Dishoom/i)).toBeInTheDocument();
  });
});

// npm run test restaurant.test.jsx
