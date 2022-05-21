import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from '../../../../restaurant/module/index';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Tab } from '../component';


const mockStore = configureStore({
  reducer: restaurantSlice.reducer,
});

    
describe('Test <Tab />', () => {
  it('should correct render label', () => {

    render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <Tab label='Some restaurant' href={`/path`} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/some restaurant/i)).toBeInTheDocument();
  });


  // it('should correct render button click', () => {
  //   const funcMock = jest.fn();

  //   render(
  //     <MemoryRouter>
  //       <Provider store={mockStore}>
  //         <Tab label='Some restaurant' href={`/path`} />
  //       </Provider>
  //     </MemoryRouter>
  //   );

  //   const buttonEl = screen.getByText(/some restaurant/i);

  //   fireEvent(
  //     buttonEl,
  //     new MouseEvent('click', { bubbles: true, cancelable: true })
  //   );

  //   expect(funcMock).toHaveBeenCalledTimes(1);
  // });
});

// npm run test tab.test.jsx
