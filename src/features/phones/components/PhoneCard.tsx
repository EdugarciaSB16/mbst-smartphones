import Image from 'next/image';
import { Product } from '../types';

export function PhoneCard({ phone }: { phone: Product }) {
  return (
    <div className="border-[0.5px] h-[340px] border-text-primary p-4 flex flex-col justify-between">
      <div className="w-full h-[290px] flex items-center justify-center mb-4">
        <Image
          src={phone.imageUrl}
          alt={phone.name}
          width={200}
          height={200}
          style={{
            width: 'auto',
            height: 'auto',
            maxHeight: '200px',
            maxWidth: '200px',
          }}
        />
      </div>
      <div className="text-[10px] uppercase font-light text-text-muted mb-1">
        {phone.brand}
      </div>
      <div className="flex justify-between">
        <div className="text-xs font-light uppercase text-primary">
          {phone.name}
        </div>
        <div className="text-xs font-light text-primary">
          {phone.basePrice} EUR
        </div>
      </div>
    </div>
  );
}
