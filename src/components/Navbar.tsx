'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 h-20">
      <div className="mx-auto w-full max-w-[1720px] px-6 flex items-center justify-between h-full">
        <Link href="/phones" className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="Logo MBST"
            width={74}
            height={24}
            priority
          />
        </Link>

        <Link href="/cart" className="relative flex items-center gap-1">
          <Image
            src="/assets/bag-icon.svg"
            alt="Carrito de compras"
            width={18}
            height={18}
            priority
          />
          {cart.length > 0 && (
            <span className="text-[16px] text-primary font-light">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
