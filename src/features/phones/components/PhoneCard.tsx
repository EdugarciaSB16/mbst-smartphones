import Image from 'next/image';
import { Product } from '../../types';
import Link from 'next/link';

export function PhoneCard({ phone }: { phone: Product }) {
  return (
    <Link href={`/phones/${phone.id}`} className="block" prefetch>
      <div className="relative group overflow-hidden border-[0.5px] h-[340px] border-text-primary p-4 flex flex-col justify-between">
        <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black transition-all duration-[300ms] ease-in-out group-hover:duration-[500ms] group-hover:bottom-0 z-10" />
        <div className="w-full h-[290px] flex items-center justify-center mb-4 relative z-20">
          <Image
            src={phone.imageUrl}
            alt={phone.name}
            width={200}
            height={200}
            loading="lazy"
            style={{
              width: 'auto',
              height: 'auto',
              maxHeight: '200px',
              maxWidth: '200px',
            }}
          />
        </div>
        <div className="text-[10px] uppercase font-light text-text-muted mb-1 relative z-20 group-hover:text-white">
          {phone.brand}
        </div>
        <div className="flex justify-between relative z-20">
          <div className="text-xs font-light uppercase text-primary group-hover:text-white">
            {phone.name}
          </div>
          <div className="text-xs font-light text-primary group-hover:text-white">
            {phone.basePrice} EUR
          </div>
        </div>
      </div>
    </Link>
  );
}
