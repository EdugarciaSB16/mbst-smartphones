'use client';

type Props = {
  options: { capacity: string }[];
};

export function StorageSelector({ options }: Props) {
  return (
    <div className="mb-8">
      <span className="text-sm uppercase font-light tracking-wider block mb-4">
        Storage ¿How much space do you need?
      </span>
      <div className="flex ">
        {options.map((option) => (
          <div
            key={option.capacity}
            className="h-[65px] w-[95px] border border-gray-300 text-sm font-light cursor-pointer select-none hover:bg-gray-100 flex items-center justify-center"
          >
            {option.capacity}
          </div>
        ))}
      </div>
    </div>
  );
}
