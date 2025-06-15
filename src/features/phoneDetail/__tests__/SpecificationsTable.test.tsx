import { render, screen } from '@testing-library/react';
import { SpecificationsTable } from '../../phoneDetail/components/SpecificationsTable';
import '@testing-library/jest-dom';

const mockSpecs = {
  screen: '6.1 inch',
  resolution: '1170 x 2532',
  processor: 'A16 Bionic',
  mainCamera: '12 MP',
  selfieCamera: '12 MP',
  battery: '3095 mAh',
  os: 'iOS 17',
  screenRefreshRate: '120 Hz',
};

describe('SpecificationsTable', () => {
  it('renders brand, name, and description', () => {
    render(
      <SpecificationsTable
        brand="Apple"
        name="iPhone 15"
        description="Latest iPhone model"
        specs={mockSpecs}
      />,
    );

    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/iPhone 15/i)).toBeInTheDocument();
    expect(screen.getByText(/Latest iPhone model/i)).toBeInTheDocument();
  });

  it('renders all specification fields', () => {
    render(
      <SpecificationsTable
        brand="Apple"
        name="iPhone 15"
        description="Latest iPhone model"
        specs={mockSpecs}
      />,
    );

    expect(screen.getByText(/MAIN CAMERA/i)).toBeInTheDocument();
    expect(screen.getAllByText(/12 MP/i)).toHaveLength(2);
    expect(screen.getByText(/BATTERY/i)).toBeInTheDocument();
    expect(screen.getByText(/3095 mAh/i)).toBeInTheDocument();
  });
});
