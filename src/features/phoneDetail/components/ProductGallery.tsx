'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type ColorOption = {
  name: string;
  hexCode: string;
  imageUrl: string;
};

type Props = {
  colorOptions: ColorOption[];
  selectedColor: ColorOption;
  setSelectedColor: (color: ColorOption) => void;
};

export function ProductGallery({ selectedColor }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <motion.div
          key={selectedColor.imageUrl}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] xl:max-w-[450px]"
        >
          <Image
            src={selectedColor.imageUrl}
            alt={selectedColor.name}
            width={450}
            height={450}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
