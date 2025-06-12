import { PhoneCard } from './PhoneCard';
import { Product } from '../types';

export function PhoneGrid({ phones }: { phones: Product[] }) {
  return (
    <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {phones.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
    </section>
  );
}
