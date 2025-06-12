'use client';
import { useState } from 'react';
import { SearchBar } from '@/features/phones/components/SearchBar';
import { PhoneGrid } from '@/features/phones/components/PhoneGrid';
import { usePhones } from '@/features/phones/hooks/usePhone';
import { ResultCount } from '@/features/phones/components/ResultCount';
import { useDebounce } from '@/hooks/useDebounce';

export default function PhonesPage() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 400);
  const { phones, isLoading } = usePhones(debouncedSearch);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <ResultCount count={phones.length} />
      {isLoading ? <p>Cargando...</p> : <PhoneGrid phones={phones} />}
    </div>
  );
}
