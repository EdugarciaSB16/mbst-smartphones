import { render, screen } from '@testing-library/react';
import { SimilarItemsMobile } from '../../phoneDetail/components/SimilarItemsMobile';
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

describe('SimilarItemsMobile', () => {
  it('renders phone cards in mobile layout', () => {
    render(<SimilarItemsMobile products={mockProducts} />);
    expect(screen.getByText(/Similar Items/i)).toBeInTheDocument();
    expect(screen.getByText(/iPhone 15/i)).toBeInTheDocument();
  });
});
