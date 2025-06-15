import { render, screen } from '@testing-library/react';
import CartPage from '../page';
import { CartContext } from '@/context/CartContext';
import { ToastContext } from '@/context/ToastContext';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const mockCartItem = {
  product: {
    id: '1',
    name: 'iPhone 15',
    brand: 'Apple',
    basePrice: 1099,
    imageUrl: '/iphone.png',
    colorOptions: [
      { name: 'Black', hexCode: '#000000', imageUrl: '/black.png' },
    ],
    storageOptions: [{ capacity: '128GB', price: 1199 }],
    description: '',
    rating: 4.5,
    specs: {
      screen: '',
      resolution: '',
      processor: '',
      mainCamera: '',
      selfieCamera: '',
      battery: '',
      os: '',
      screenRefreshRate: '',
    },
    similarProducts: [],
  },
  selectedColor: 'Black',
  selectedStorage: '128GB',
};

const mockCartContext = {
  cart: [mockCartItem],
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
};

const mockToastContext = {
  toasts: [],
  showToast: jest.fn(),
};

const renderWithProviders = () => {
  render(
    <CartContext.Provider value={mockCartContext}>
      <ToastContext.Provider value={mockToastContext}>
        <CartPage />
      </ToastContext.Provider>
    </CartContext.Provider>,
  );
};

describe('CartPage', () => {
  it('renders product details and total price', () => {
    renderWithProviders();

    expect(screen.getByText(/Cart \(1\)/i)).toBeInTheDocument();
    expect(screen.getByText(/iPhone 15/i)).toBeInTheDocument();
    expect(screen.getByText(/128GB \| Black/i)).toBeInTheDocument();
    expect(screen.getAllByText(/1199 EUR/i).length).toBeGreaterThan(0); // aparece como precio y como total
    expect(screen.getAllByText(/Continue Shopping/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Pay/i).length).toBeGreaterThan(0);
  });

  it('calls removeFromCart and showToast when clicking Remove', async () => {
    render(
      <CartContext.Provider value={mockCartContext}>
        <ToastContext.Provider value={mockToastContext}>
          <CartPage />
        </ToastContext.Provider>
      </CartContext.Provider>,
    );

    const removeButton = screen.getByRole('button', { name: /remove/i });
    await userEvent.click(removeButton);

    expect(mockCartContext.removeFromCart).toHaveBeenCalledWith(0);
    expect(mockToastContext.showToast).toHaveBeenCalledWith(
      'Product removed from cart',
    );
  });

  it('renders correctly when cart is empty', () => {
    const emptyCartContext = {
      ...mockCartContext,
      cart: [],
    };

    render(
      <CartContext.Provider value={emptyCartContext}>
        <ToastContext.Provider value={mockToastContext}>
          <CartPage />
        </ToastContext.Provider>
      </CartContext.Provider>,
    );

    expect(
      screen.queryByRole('button', { name: /pay/i }),
    ).not.toBeInTheDocument();

    expect(screen.getAllByText(/continue shopping/i).length).toBeGreaterThan(0);

    expect(screen.getByText(/cart \(0\)/i)).toBeInTheDocument();
  });
});
