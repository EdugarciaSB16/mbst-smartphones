'use client';

type Props = {
  options: { capacity: string }[];
};

export function StorageSelector({ options }: Props) {
  return (
    <div className="mb-8">
      <span className="text-xs uppercase font-light tracking-wider block mb-2">
        Storage
      </span>
      <div className="flex">
        {options.map((option) => (
          <div
            key={option.capacity}
            className="px-4 py-2 border border-gray-300 text-sm font-light cursor-pointer select-none hover:bg-gray-100"
          >
            {option.capacity}
          </div>
        ))}
      </div>
    </div>
  );
}
