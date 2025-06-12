'use client';

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export function SearchBar({ search, setSearch }: Props) {
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
