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
        >
          <Image
            src={selectedColor.imageUrl}
            alt={selectedColor.name}
            height={450}
            width={450}
            className="object-contain"
            style={{
              maxHeight: '450px',
              maxWidth: '450px',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
