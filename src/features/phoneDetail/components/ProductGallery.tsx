'use client';

import Image from 'next/image';

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
      <div className="w-full">
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
      </div>
    </div>
  );
}
