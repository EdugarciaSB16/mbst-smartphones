'use client';

import { useState } from 'react';

export function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <section className="w-full mx-auto mt-[48px]">
      <div className="border-b pb-2">
        <input
          type="text"
          placeholder="Search for a smartphone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-base font-light placeholder-text-muted outline-none"
        />
      </div>
    </section>
  );
}
