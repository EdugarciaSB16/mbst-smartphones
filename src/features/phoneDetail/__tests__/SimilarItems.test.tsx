import { render, screen } from '@testing-library/react';
import { SimilarItems } from '../../phoneDetail/components/SimilarItems';
import * as useIsMobileHook from '@/hooks/useIsMobile';
import '@testing-library/jest-dom';

jest.mock('@/hooks/useIsMobile');

const mockProducts = [
  {
    id: '1',
    name: 'iPhone 15',
    brand: 'Apple',
    imageUrl: '/iphone.png',
    basePrice: 1099,
  },
];

describe('SimilarItems', () => {
  it('renders mobile version when isMobile is true', () => {
    jest.spyOn(useIsMobileHook, 'useIsMobile').mockReturnValue(true);

    render(<SimilarItems products={mockProducts} />);
    expect(screen.getByText(/Similar Items/i)).toBeInTheDocument();
    expect(screen.getByText(/iPhone 15/i)).toBeInTheDocument();
  });

  it('renders desktop version when isMobile is false', () => {
    jest.spyOn(useIsMobileHook, 'useIsMobile').mockReturnValue(false);

    render(<SimilarItems products={mockProducts} />);
    expect(screen.getByText(/Similar Items/i)).toBeInTheDocument();
    expect(screen.getByText(/iPhone 15/i)).toBeInTheDocument();
  });
});
