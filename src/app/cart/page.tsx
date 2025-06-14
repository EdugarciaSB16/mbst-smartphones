'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => {
    const storage = item.product.storageOptions.find(
      (opt) => opt.capacity === item.selectedStorage
    );
    return acc + (storage?.price ?? item.product.basePrice);
  }, 0);

  return (
    <section className="w-full max-w-[1720px] mx-auto px-6 pt-10 pb-40 min-h-screen relative">
      <h1 className="text-2xl font-light uppercase mb-10">
        Cart ({cart.length})
      </h1>

      <div className="space-y-10 mb-24">
        {cart.map((item, index) => {
          const price =
            item.product.storageOptions.find(
              (opt) => opt.capacity === item.selectedStorage
            )?.price ?? item.product.basePrice;

          const color = item.product.colorOptions.find(
            (c) => c.name === item.selectedColor
          );

          return (
            <div key={index} className="flex gap-8 items-start">
              <Image
                src={color?.imageUrl || '/placeholder.png'}
                alt={item.product.name}
                width={160}
                height={160}
                className="object-contain"
              />
              <div>
                <p className="text-xs uppercase font-light mb-2">
                  {item.product.name}
                </p>
                <p className="text-xs font-light mb-2">
                  {item.selectedStorage} | {item.selectedColor}
                </p>
                <p className="text-xs font-light mb-2">{price} EUR</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-xs text-[#DF0000] cursor-pointer"
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-0 left-0 w-full  bg-white z-50">
        <div className="w-full max-w-[1720px] mx-auto px-6 py-6">
          <div className="flex justify-between sm:hidden w-full mb-4">
            <span className="text-sm font-light uppercase">Total</span>
            <span className="text-sm font-light">{total} EUR</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex w-full gap-4 sm:hidden">
              <div className="w-1/2">
                <Link
                  href="/phones"
                  className="border px-4 py-3 text-xs uppercase font-light w-full text-center block"
                >
                  Continue Shopping
                </Link>
              </div>
              <div className="w-1/2">
                <button className="bg-primary text-white px-4 py-3 text-xs uppercase w-full">
                  Pay
                </button>
              </div>
            </div>

            <div className="hidden sm:flex w-full justify-between items-center">
              <Link
                href="/phones"
                className="border px-4 py-3 text-xs uppercase font-light text-center w-[260px]"
              >
                Continue Shopping
              </Link>
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  <span className="text-sm font-light uppercase">Total</span>
                  <span className="text-sm font-light">{total} EUR</span>
                </div>
                <button className="bg-primary text-white px-4 py-3 text-xs uppercase w-[260px] cursor-pointer">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
