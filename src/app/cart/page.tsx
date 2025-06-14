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
    <section className="w-full max-w-[1720px] mx-auto px-6 py-10">
      <h1 className="text-xl font-light uppercase mb-10">
        Cart ({cart.length})
      </h1>

      <div className="mb-16 space-y-10">
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
                <p className="text-sm uppercase font-light mb-2">
                  {item.product.name}
                </p>
                <p className="text-xs font-light mb-2">
                  {item.selectedStorage} | {item.selectedColor}
                </p>
                <p className="text-xs font-light mb-2">{price} EUR</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-xs text-red-500"
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center">
        <Link
          href="/phones"
          className="border px-8 py-4 text-xs uppercase font-light"
        >
          Continue Shopping
        </Link>

        <div className="flex items-center gap-6">
          <span className="text-xs font-light uppercase">Total</span>
          <span className="text-sm font-light">{total} EUR</span>
          <button className="bg-black text-white px-12 py-4 text-xs uppercase">
            Pay
          </button>
        </div>
      </div>
    </section>
  );
}
