import { renderHook } from '@testing-library/react';
import useSWR from 'swr';
import { useProductById } from '../../phoneDetail/hooks/useProductById';
import { ProductDetail } from '../../types';

jest.mock('swr');

const mockProduct: ProductDetail = {
  id: '1',
  name: 'iPhone 15',
  brand: 'Apple',
  basePrice: 1099,
  imageUrl: '/iphone.png',
  colorOptions: [],
  storageOptions: [],
  description: '',
  rating: 3,
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
};

describe('useProductById', () => {
  it('returns product when loaded', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: mockProduct,
      error: null,
      isLoading: false,
    });

    const { result } = renderHook(() => useProductById('1'));
    expect(result.current.product).toEqual(mockProduct);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBeNull();
  });

  it('returns loading state', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
    });

    const { result } = renderHook(() => useProductById('1'));
    expect(result.current.isLoading).toBe(true);
  });

  it('returns error state', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: undefined,
      error: 'API error',
      isLoading: false,
    });

    const { result } = renderHook(() => useProductById('1'));
    expect(result.current.isError).toBe('API error');
  });
});
