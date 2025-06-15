'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Product } from '@/features/types';
import { PhoneCard } from '@/features/phones/components/PhoneCard';
import { motion, useAnimation } from 'framer-motion';

export function SimilarItemsDesktop({ products }: { products: Product[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const controls = useAnimation();

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      containerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (e.shiftKey && containerRef.current) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleWheel]);

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4">
        <h2
          id="similar-items-heading"
          className="text-xl font-light uppercase mb-10"
        >
          Similar Items
        </h2>
      </div>

      <section
        className="w-full overflow-x-hidden pb-16"
        aria-labelledby="similar-items-heading"
      >
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          className="overflow-x-hidden select-none"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.4 }}
            className="flex w-fit"
          >
            <div className="hidden md:block w-[calc((100vw-1200px)/2+16px)] shrink-0" />

            {products.map((product) => (
              <div key={product.id} className="w-[344px] flex-shrink-0">
                <PhoneCard phone={product} />
              </div>
            ))}

            <div className="w-4 md:w-[calc((100vw-1200px)/2)] shrink-0" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
