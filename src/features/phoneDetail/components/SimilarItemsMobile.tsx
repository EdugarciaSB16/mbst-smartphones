'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Product } from '@/features/types';
import { PhoneCard } from '@/features/phones/components/PhoneCard';
import { motion, useAnimation } from 'framer-motion';

export function SimilarItemsMobile({ products }: { products: Product[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const controls = useAnimation();

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      const x = e.touches[0].pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      containerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft],
  );

  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <div className="ml-[25px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-xl font-light uppercase mb-10">Similar Items</h2>
      </div>

      <section className="w-full overflow-x-hidden pb-16">
        <div
          ref={containerRef}
          className="overflow-x-hidden select-none"
          style={{ touchAction: 'pan-y' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.4 }}
            className="flex w-full max-w-[1200px] px-4 mx-auto"
          >
            {products.map((product) => (
              <div key={product.id} className="w-[280px] flex-shrink-0">
                <PhoneCard phone={product} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
