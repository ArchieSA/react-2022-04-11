import { render, screen } from '@testing-library/react';
import { Menu } from '../component';
import { menu } from '../mocks';


describe('Test <Menu />', () => {
  it('should correct render with empty menu', () => {
    render(<Menu />);

    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  it('should correct render with menu', () => {
    render(<Menu menu={menu} />);

    expect(screen.getByText("Chicken tikka masala")).toBeInTheDocument();
  });
});

// npm run test menu.test.jsx
