import { Skeleton } from '@/components/Skeleton';

export function PhoneGridSkeleton() {
  return (
    <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="border-[0.5px] h-[340px] border-text-primary p-4 flex flex-col justify-between"
        >
          <Skeleton className="w-full h-[200px]" />
          <Skeleton className="w-1/2 h-4 mt-2" />
          <Skeleton className="w-3/4 h-4" />
        </div>
      ))}
    </section>
  );
}
