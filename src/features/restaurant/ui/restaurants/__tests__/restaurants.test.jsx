import { render } from '@testing-library/react';
import { Restaurants } from '../component';
import { restaurants } from '../mocks';

describe('Test <Restaurant />', () => {
  it('should render with restaurants empty', () => {
    const {container} = render(<Restaurants restaurants={[]} />);

    expect(container).toBeInTheDocument();
  });

  it('should correct render ', () => {
    const { container } = render(<Restaurants restaurants={restaurants} />);

    expect(container).toBeInTheDocument();
  });
});

// npm run test restaurants.test.jsx
