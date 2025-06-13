'use client';

type ColorOption = {
  name: string;
  hexCode: string;
  imageUrl: string;
};

type Props = {
  options: ColorOption[];
  selected: ColorOption | null;
  onSelect: (color: ColorOption) => void;
};

export function ColorSelector({ options, selected, onSelect }: Props) {
  return (
    <div className="mb-8">
      <span className="text-xs uppercase font-light tracking-wider block mb-2">
        Color. Pick your favourite.
      </span>
      <div className="flex gap-3">
        {options.map((option) => (
          <button
            key={option.hexCode}
            onClick={() => onSelect(option)}
            className={`w-6 h-6 border ${
              selected?.hexCode === option.hexCode
                ? 'ring-2 ring-offset-2 ring-gray-400'
                : 'border-gray-300'
            }`}
            style={{ backgroundColor: option.hexCode }}
            aria-label={option.name}
          />
        ))}
      </div>
    </div>
  );
}
