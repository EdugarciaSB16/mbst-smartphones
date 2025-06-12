'use client';

import { useProductById } from '@/features/phoneDetail/hooks/useProductById';
import { notFound } from 'next/navigation';
import { PageTransition } from '@/components/PageTransition';

type Props = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: Props) {
  const { id } = params;
  const { product, isLoading, isError } = useProductById(id);

  if (isLoading) return <p className="p-4">Cargando producto...</p>;
  if (isError || !product) return notFound();

  return (
    <PageTransition>
      <div className="p-8">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
        <p className="text-lg font-semibold text-primary mb-4">
          Desde {product.basePrice} EUR
        </p>
        <p className="text-sm text-gray-700">{product.description}</p>
      </div>
    </PageTransition>
  );
}
