import { Product } from '@/features/types';

export function dedupeProducts(products: Product[], limit = 20): Product[] {
  const unique = products.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id),
  );
  return unique.slice(0, limit);
}
