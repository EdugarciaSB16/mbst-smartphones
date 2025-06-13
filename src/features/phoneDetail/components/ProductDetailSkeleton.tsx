import { Skeleton } from '@/components/Skeleton';

export function ProductDetailSkeleton() {
  return (
    <main className="w-full flex justify-center">
      <section className="w-full max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center lg:justify-start w-full">
            <Skeleton className="w-[280px] h-[300px] rounded-md" />
          </div>
          <div className="flex flex-col gap-6 w-full max-w-[380px] mx-auto lg:mx-0">
            <header className="mb-8">
              <Skeleton className="w-3/4 h-6 mb-2" />
              <Skeleton className="w-1/2 h-5" />
            </header>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-2/3 h-4" />
              <div className="flex gap-2">
                <Skeleton className="w-12 h-10 rounded" />
                <Skeleton className="w-12 h-10 rounded" />
                <Skeleton className="w-12 h-10 rounded" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-2/3 h-4" />
              <div className="flex gap-2">
                <Skeleton className="w-6 h-6 rounded" />
                <Skeleton className="w-6 h-6 rounded" />
                <Skeleton className="w-6 h-6 rounded" />
              </div>
            </div>
            <Skeleton className="w-full h-14 rounded-md" />
          </div>
        </div>
      </section>
    </main>
  );
}
