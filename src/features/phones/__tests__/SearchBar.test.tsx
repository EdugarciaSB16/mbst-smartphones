import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../../phones/components/SearchBar';
import '@testing-library/jest-dom';

describe('SearchBar', () => {
  it('renders input with placeholder', () => {
    render(<SearchBar search="" setSearch={() => {}} />);
    expect(
      screen.getByPlaceholderText(/search for a smartphone/i),
    ).toBeInTheDocument();
  });

  it('updates value on user input', () => {
    const mockSetSearch = jest.fn();

    render(<SearchBar search="" setSearch={mockSetSearch} />);
    const input = screen.getByPlaceholderText(/search for a smartphone/i);

    fireEvent.change(input, { target: { value: 'iphone' } });

    expect(mockSetSearch).toHaveBeenCalledWith('iphone');
  });
});
