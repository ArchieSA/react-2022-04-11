import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from '../component';
import { tabs } from '../test-tabs';

describe('test tabs component', () => {
  it('should correct render tabs', () => {
    const functionMock = jest.fn();

    render(<Tabs tabs={tabs} onTabSelect={functionMock} />);

    expect(screen.getByText(tabs[1].label)).toBeInTheDocument();
  });
});