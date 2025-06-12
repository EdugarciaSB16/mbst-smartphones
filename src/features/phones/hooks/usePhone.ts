import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Product } from '../../types';

function dedupeProducts(products: Product[], limit = 20): Product[] {
  const unique = products.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );
  return unique.slice(0, limit);
}

export function usePhones(search?: string) {
  const query = search
    ? `?search=${encodeURIComponent(search)}&limit=40`
    : '?limit=40';
  const { data, error, isLoading } = useSWR<Product[]>(
    `/api/products${query}`,
    fetcher
  );

  const cleaned = data ? dedupeProducts(data) : [];

  return {
    phones: cleaned,
    isLoading,
    isError: error,
  };
}
