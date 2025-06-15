import { render, screen } from '@testing-library/react';
import { SimilarItemsDesktop } from '../../phoneDetail/components/SimilarItemsDesktop';
import '@testing-library/jest-dom';

const mockProducts = [
  {
    id: '1',
    name: 'iPhone 15',
    brand: 'Apple',
    imageUrl: '/iphone.png',
    basePrice: 1099,
  },
];

describe('SimilarItemsDesktop', () => {
  it('renders phone cards in desktop layout', () => {
    render(<SimilarItemsDesktop products={mockProducts} />);
    expect(screen.getByText(/Similar Items/i)).toBeInTheDocument();
    expect(screen.getByText(/iPhone 15/i)).toBeInTheDocument();
  });
});
