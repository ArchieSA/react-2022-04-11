import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Restaurant } from '../component';
import { restaurant } from '../mocks';
// import { render, fireEvent, screen } from '../../../../../testing/test-utis';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../../root-module';


describe('Test <Restaurant />', () => {
  it('should correct render ', () => {
    
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Restaurant restaurant={restaurant} />
        </Provider>
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Dishoom/i)).toBeInTheDocument();
  });
});

// npm run test restaurant.test.jsx
