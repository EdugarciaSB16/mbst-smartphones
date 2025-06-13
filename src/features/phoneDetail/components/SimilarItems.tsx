import { Product } from '@/features/types';
import { PhoneCard } from '@/features/phones/components/PhoneCard';
import { motion } from 'framer-motion';

export function SimilarItems({ products }: { products: Product[] }) {
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
        className="overflow-x-auto pb-16"
        aria-labelledby="similar-items-heading"
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex w-fit px-4"
          >
            {products.map((product) => (
              <div key={product.id} className="w-[344px] flex-shrink-0">
                <PhoneCard phone={product} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
