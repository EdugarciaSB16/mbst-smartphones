import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductDetailPage from '../page';
import * as useProductByIdHook from '@/features/phoneDetail/hooks/useProductById';
import * as useCartContext from '@/context/CartContext';
import * as toastContext from '@/context/ToastContext';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useParams: () => ({ id: '1' }),
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/phones/1',
  notFound: jest.fn(),
}));

const mockProduct = {
  id: '1',
  name: 'iPhone 15',
  brand: 'Apple',
  basePrice: 1099,
  imageUrl: '/iphone.png',
  description: 'Latest model from Apple',
  rating: 4.5,
  specs: {
    screen: '6.1 inch',
    resolution: '1170 x 2532',
    processor: 'A16 Bionic',
    mainCamera: '12 MP',
    selfieCamera: '12 MP',
    battery: '3095 mAh',
    os: 'iOS 17',
    screenRefreshRate: '120 Hz',
  },
  colorOptions: [{ name: 'Black', hexCode: '#000000', imageUrl: '/black.png' }],
  storageOptions: [{ capacity: '128GB', price: 1099 }],
  similarProducts: [],
};

describe('ProductDetailPage', () => {
  const mockAddToCart = jest.fn();
  const mockPush = jest.fn();
  const mockShowToast = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(useProductByIdHook, 'useProductById').mockReturnValue({
      product: mockProduct,
      isLoading: false,
      isError: null,
    });

    jest.spyOn(useCartContext, 'useCart').mockReturnValue({
      cart: [],
      addToCart: mockAddToCart,
      removeFromCart: jest.fn(),
    });

    jest.spyOn(toastContext, 'useToast').mockReturnValue({
      toasts: [],
      showToast: mockShowToast,
    });

    jest.mocked(require('next/navigation')).useRouter = () => ({
      push: mockPush,
    });
  });

  it('renders product name and price', () => {
    render(<ProductDetailPage />);
    expect(screen.getAllByText(/iphone 15/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/From 1099 EUR/i)).toBeInTheDocument();
  });

  it('enables add button after selecting storage', async () => {
    render(<ProductDetailPage />);
    const storageButton = screen.getByText(/128GB/i);
    fireEvent.click(storageButton);

    const addButton = screen.getByRole('button', { name: /add/i });
    await waitFor(() => expect(addButton).toBeEnabled());
  });

  it('calls addToCart, shows toast and redirects', async () => {
    render(<ProductDetailPage />);
    fireEvent.click(screen.getByText(/128GB/i));

    const addButton = screen.getByRole('button', { name: /add/i });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(mockAddToCart).toHaveBeenCalled();
      expect(mockShowToast).toHaveBeenCalledWith('Product added to cart');
      expect(mockPush).toHaveBeenCalledWith('/cart');
    });
  });
});
