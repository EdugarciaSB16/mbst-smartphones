import { render, screen } from '@testing-library/react';
import CartPage from '../page';
import { CartContext } from '@/context/CartContext';
import { ToastContext } from '@/context/ToastContext';

const mockCartContext = {
  cart: [],
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
};

const mockToastContext = {
  toasts: [],
  showToast: jest.fn(),
};

const renderWithProviders = (cart: any[] = []) => {
  render(
    <CartContext.Provider value={{ ...mockCartContext, cart }}>
      <ToastContext.Provider value={mockToastContext}>
        <CartPage />
      </ToastContext.Provider>
    </CartContext.Provider>,
  );
};

describe('CartPage', () => {
  it('renders empty cart message and continue shopping button', () => {
    renderWithProviders();

    expect(screen.getByText(/cart \(0\)/i)).toBeInTheDocument();
    expect(screen.getAllByText(/continue shopping/i).length).toBeGreaterThan(0);
  });
});
