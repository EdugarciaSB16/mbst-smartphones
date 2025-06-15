'use client';
import { useParams, useRouter, notFound } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useProductById } from '@/features/phoneDetail/hooks/useProductById';
import { PageTransition } from '@/components/PageTransition';
import { BackButton } from '@/components/BackButton';
import { useState, useEffect, useMemo } from 'react';
import { ProductGallery } from '@/features/phoneDetail/components/ProductGallery';
import { StorageSelector } from '@/features/phoneDetail/components/StorageSelector';
import { ColorSelector } from '@/features/phoneDetail/components/ColorSelector';
import { ProductDetailSkeleton } from '@/features/phoneDetail/components/ProductDetailSkeleton';
import { SpecificationsTable } from '@/features/phoneDetail/components/SpecificationsTable';
import { SimilarItems } from '@/features/phoneDetail/components/SimilarItems';
import { dedupeProducts } from '@/lib/dedupeProducts';
import { motion } from 'framer-motion';

type ColorOption = {
  name: string;
  hexCode: string;
  imageUrl: string;
};

export default function ProductDetailPage() {
  const { id } = useParams() as { id: string };
  const { product, isLoading, isError } = useProductById(id);
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<{
    capacity: string;
    price: number;
  } | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  const dedupedSimilarProducts = useMemo(() => {
    return dedupeProducts(product?.similarProducts ?? []);
  }, [product?.similarProducts]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedStorage || !product) return;

    addToCart({
      product,
      selectedColor: selectedColor.name,
      selectedStorage: selectedStorage.capacity,
    });
    router.push('/cart');
  };

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
        <section className="w-full max-w-[1200px] px-4 py-10">
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
                  From {selectedStorage?.price ?? product.basePrice} EUR
                </p>
              </header>

              <StorageSelector
                options={product.storageOptions}
                selected={selectedStorage || undefined}
                onSelect={setSelectedStorage}
              />
              <ColorSelector
                options={product.colorOptions}
                selected={selectedColor}
                onSelect={setSelectedColor}
              />
              <motion.button
                disabled={!selectedStorage}
                initial={false}
                animate={{
                  opacity: selectedStorage ? 1 : 0.5,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`py-4 px-5 text-xs cursor-pointer tracking-widest uppercase transition-colors h-14 flex items-center justify-center ${
                  !selectedStorage
                    ? 'bg-[#F3F2F2] text-[#C2BFBC]'
                    : 'bg-primary text-white'
                }`}
                onClick={handleAddToCart}
              >
                Add
              </motion.button>
            </div>
          </div>
          <div className="my-[154px]" />
          <section aria-labelledby="specifications-heading">
            <SpecificationsTable
              brand={product.brand}
              name={product.name}
              description={product.description}
              specs={product.specs}
            />
          </section>
          <div className="my-[154px]" />
          <section className="relative w-screen left-1/2 -translate-x-1/2">
            <SimilarItems products={dedupedSimilarProducts} />
          </section>
        </section>
      </main>
    </PageTransition>
  );
}
