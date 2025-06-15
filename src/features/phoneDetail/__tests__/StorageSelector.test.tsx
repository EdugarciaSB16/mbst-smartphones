import { render, screen, fireEvent } from '@testing-library/react';
import { StorageSelector } from '../../phoneDetail/components/StorageSelector';
import '@testing-library/jest-dom';

const mockOptions = [
  { capacity: '128GB', price: 100 },
  { capacity: '256GB', price: 150 },
];

describe('StorageSelector', () => {
  it('renders all storage options', () => {
    render(
      <StorageSelector
        options={mockOptions}
        selected={undefined}
        onSelect={() => {}}
      />,
    );
    expect(screen.getByText(/128GB/i)).toBeInTheDocument();
    expect(screen.getByText(/256GB/i)).toBeInTheDocument();
  });

  it('calls onSelect when an option is clicked', () => {
    const mockSelect = jest.fn();
    render(
      <StorageSelector
        options={mockOptions}
        selected={undefined}
        onSelect={mockSelect}
      />,
    );
    fireEvent.click(screen.getByText(/128GB/i));
    expect(mockSelect).toHaveBeenCalledWith(mockOptions[0]);
  });

  it('applies active style to selected option', () => {
    render(
      <StorageSelector
        options={mockOptions}
        selected={mockOptions[1]}
        onSelect={() => {}}
      />,
    );
    const selectedButton = screen.getByText(/256GB/i);
    expect(selectedButton.className).toContain('border-black');
  });
});
