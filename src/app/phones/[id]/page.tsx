'use client';

import { useProductById } from '@/features/phoneDetail/hooks/useProductById';
import { notFound } from 'next/navigation';
import { PageTransition } from '@/components/PageTransition';
import { BackButton } from '@/components/BackButton';
import { useState, useEffect } from 'react';
import { ProductGallery } from '@/features/phoneDetail/components/ProductGallery';
import { StorageSelector } from '@/features/phoneDetail/components/StorageSelector';
import { ColorSelector } from '@/features/phoneDetail/components/ColorSelector';
import { ProductDetailSkeleton } from '@/features/phoneDetail/components/ProductDetailSkeleton';

type Props = {
  params: { id: string };
};

type ColorOption = {
  name: string;
  hexCode: string;
  imageUrl: string;
};

export default function ProductDetailPage({ params }: Props) {
  const { id } = params;
  const { product, isLoading, isError } = useProductById(id);

  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);

  useEffect(() => {
    if (product?.colorOptions?.length) {
      setSelectedColor(product.colorOptions[0]);
    }
  }, [product]);

  if (isLoading) return <ProductDetailSkeleton />;
  if (isError || !product) return notFound();

  return (
    <PageTransition>
      <BackButton />
      <main className="w-full flex justify-center">
        <section className="w-full max-w-6xl px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center lg:justify-start w-full">
              {selectedColor && (
                <ProductGallery
                  colorOptions={product.colorOptions}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />
              )}
            </div>

            <div className="flex flex-col gap-6 w-full max-w-[380px] mx-auto lg:mx-0">
              <header className="mb-8">
                <h1 className="text-2xl font-light uppercase">
                  {product.name}
                </h1>
                <p className="text-xl font-light">
                  From {product.basePrice} EUR
                </p>
              </header>

              <StorageSelector options={product.storageOptions} />
              <ColorSelector
                options={product.colorOptions}
                selected={selectedColor}
                onSelect={setSelectedColor}
              />

              <button
                disabled
                className="bg-black text-white py-4 px-5 text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors h-14 flex items-center justify-center"
              >
                Añadir
              </button>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
