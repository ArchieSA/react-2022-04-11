import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from '../component';
import { tabs } from '../mocks';

describe('Test <Tabs />', () => {
  it('should correct render ', () => {
    const funcMock = jest.fn();

    render(<Tabs tabs={tabs} onTabSelect={funcMock} />);

    expect(screen.getByText(tabs[3].label)).toBeInTheDocument();
  });
});

// npm run test tabs.test.jsx
