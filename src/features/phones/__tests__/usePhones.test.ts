import { renderHook } from '@testing-library/react';
import useSWR from 'swr';
import { usePhones } from '../../phones/hooks/usePhone';
import { Product } from '../../types';

jest.mock('swr');

const mockPhones: Product[] = [
  { id: '1', name: 'iPhone', brand: 'Apple', basePrice: 999, imageUrl: '' },
  { id: '1', name: 'iPhone', brand: 'Apple', basePrice: 999, imageUrl: '' }, // duplicado
  { id: '2', name: 'Pixel', brand: 'Google', basePrice: 899, imageUrl: '' },
];

describe('usePhones', () => {
  it('returns cleaned and deduplicated phones', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: mockPhones,
      error: null,
      isLoading: false,
    });

    const { result } = renderHook(() => usePhones());
    expect(result.current.phones.length).toBe(2);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBeNull();
  });

  it('returns loading state', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
    });

    const { result } = renderHook(() => usePhones());
    expect(result.current.isLoading).toBe(true);
  });

  it('returns error state', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: undefined,
      error: 'Error fetching',
      isLoading: false,
    });

    const { result } = renderHook(() => usePhones());
    expect(result.current.isError).toBe('Error fetching');
  });
});
