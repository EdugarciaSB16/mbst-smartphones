'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-sm text-primary hover:underline mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}
