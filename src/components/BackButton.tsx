'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-1 font-light text-xs text-primary mb-6 cursor-pointer uppercase"
    >
      <ChevronLeft className="w-4 h-4" />
      Back
    </button>
  );
}
