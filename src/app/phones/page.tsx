'use client';
import { useState } from 'react';
import { SearchBar } from '@/features/phones/components/SearchBar';
import { PhoneGrid } from '@/features/phones/components/PhoneGrid';
import { usePhones } from '@/features/phones/hooks/usePhone';
import { ResultCount } from '@/features/phones/components/ResultCount';
import { useDebounce } from '@/hooks/useDebounce';
import { PageTransition } from '@/components/PageTransition';
import { PhoneGridSkeleton } from '@/features/phones/components/PhoneGridSkeleton';

export default function PhonesPage() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 400);
  const { phones, isLoading } = usePhones(debouncedSearch);

  return (
    <PageTransition>
      <SearchBar search={search} setSearch={setSearch} />
      <ResultCount count={phones.length} />
      {isLoading ? <PhoneGridSkeleton /> : <PhoneGrid phones={phones} />}
    </PageTransition>
  );
}
