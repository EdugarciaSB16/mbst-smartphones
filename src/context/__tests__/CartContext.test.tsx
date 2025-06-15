import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { CartProvider, useCart } from '../CartContext';

const mockProduct = {
  product: {
    id: '1',
    name: 'iPhone 15',
    brand: 'Apple',
    imageUrl: '/iphone.png',
    basePrice: 1099,
    description: 'Latest iPhone with amazing camera.',
    rating: 4.8,
    specs: {
      screen: '6.1 inch OLED',
      resolution: '1170 x 2532',
      processor: 'A16 Bionic',
      mainCamera: '48MP Dual',
      selfieCamera: '12MP',
      battery: '3200mAh',
      os: 'iOS 17',
      screenRefreshRate: '120Hz',
    },
    colorOptions: [
      { name: 'Black', hexCode: '#000000', imageUrl: '/black.png' },
      { name: 'White', hexCode: '#FFFFFF', imageUrl: '/white.png' },
    ],
    storageOptions: [
      { capacity: '128GB', price: 1199 },
      { capacity: '256GB', price: 1299 },
    ],
    similarProducts: [],
  },
  selectedColor: 'Black',
  selectedStorage: '128GB',
};

function TestComponent() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <button onClick={() => addToCart(mockProduct)}>Add</button>
      <button onClick={() => removeFromCart(0)}>Remove</button>
      <p data-testid="count">{cart.length}</p>
    </div>
  );
}

describe('CartContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes with an empty cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('adds a product to the cart and persists it', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    act(() => {
      screen.getByText('Add').click();
    });

    expect(screen.getByTestId('count')).toHaveTextContent('1');
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(stored).toHaveLength(1);
    expect(stored[0].product.name).toBe('iPhone 15');
  });

  it('removes a product from the cart and updates localStorage', () => {
    localStorage.setItem('cart', JSON.stringify([mockProduct]));

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(screen.getByTestId('count')).toHaveTextContent('1');

    act(() => {
      screen.getByText('Remove').click();
    });

    expect(screen.getByTestId('count')).toHaveTextContent('0');
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(stored).toHaveLength(0);
  });
});
