import { render, screen } from '@testing-library/react';
import { PhoneCard } from '../../phones/components/PhoneCard';
import { Product } from '../../types';
import '@testing-library/jest-dom';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

const mockPhone: Product = {
  id: '1',
  name: 'Galaxy S24',
  brand: 'Samsung',
  imageUrl: '/mock-image.png',
  basePrice: 999,
};

describe('PhoneCard', () => {
  it('renders phone name, brand, price and image', () => {
    render(
      <MemoryRouterProvider>
        <PhoneCard phone={mockPhone} />
      </MemoryRouterProvider>,
    );

    expect(screen.getByText(/galaxy s24/i)).toBeInTheDocument();
    expect(screen.getByText(/samsung/i)).toBeInTheDocument();
    expect(screen.getByText(/999 eur/i)).toBeInTheDocument();
    expect(screen.getByAltText(/galaxy s24/i)).toBeInTheDocument();
  });

  it('has link to phone detail page', () => {
    render(
      <MemoryRouterProvider>
        <PhoneCard phone={mockPhone} />
      </MemoryRouterProvider>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/phones/1');
  });
});
