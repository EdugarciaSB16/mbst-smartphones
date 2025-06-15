'use client';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Product } from '@/features/types';
import { SimilarItemsMobile } from './SimilarItemsMobile';
import { SimilarItemsDesktop } from './SimilarItemsDesktop';

export function SimilarItems({ products }: { products: Product[] }) {
  const isMobile = useIsMobile();
  return isMobile ? (
    <SimilarItemsMobile products={products} />
  ) : (
    <SimilarItemsDesktop products={products} />
  );
}
