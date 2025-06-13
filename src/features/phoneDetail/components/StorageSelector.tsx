'use client';

type StorageOption = {
  capacity: string;
  price: number;
};

type Props = {
  options: StorageOption[];
  selected?: StorageOption;
  onSelect: (option: StorageOption) => void;
};

export function StorageSelector({ options, selected, onSelect }: Props) {
  return (
    <div className="mb-8">
      <span className="text-sm uppercase font-light tracking-wider block mb-4">
        Storage ¿How much space do you need?
      </span>
      <div className="flex flex-wrap">
        {options.map((option) => {
          const isSelected = selected?.capacity === option.capacity;
          return (
            <button
              key={option.capacity}
              onClick={() => onSelect(option)}
              className={`h-[65px] w-[95px] border text-sm font-light cursor-pointer select-none flex items-center justify-center transition-colors ${
                isSelected ? 'border-black' : 'border-border'
              }`}
            >
              {option.capacity}
            </button>
          );
        })}
      </div>
    </div>
  );
}
