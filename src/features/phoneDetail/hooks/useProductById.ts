import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { ProductDetail } from '../../types';

export function useProductById(id: string) {
  const { data, error, isLoading } = useSWR<ProductDetail>(
    id ? `/api/products/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      dedupingInterval: 10000,
    }
  );

  return {
    product: data,
    isLoading,
    isError: error,
  };
}
