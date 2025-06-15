import { render, screen } from '@testing-library/react';
import { PhoneGrid } from '../../phones/components/PhoneGrid';
import { Product } from '../../types';
import '@testing-library/jest-dom';

const mockPhones: Product[] = [
  {
    id: '1',
    name: 'iPhone 15',
    brand: 'Apple',
    imageUrl: '/iphone.png',
    basePrice: 1099,
  },
  {
    id: '2',
    name: 'Pixel 8',
    brand: 'Google',
    imageUrl: '/pixel.png',
    basePrice: 899,
  },
];

describe('PhoneGrid', () => {
  it('renders a grid of phone cards', () => {
    render(<PhoneGrid phones={mockPhones} />);

    expect(screen.getByText(/iphone 15/i)).toBeInTheDocument();
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
    expect(screen.getByText(/1099 eur/i)).toBeInTheDocument();

    expect(screen.getByText(/pixel 8/i)).toBeInTheDocument();
    expect(screen.getByText(/google/i)).toBeInTheDocument();
    expect(screen.getByText(/899 eur/i)).toBeInTheDocument();
  });
});
