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

      <div className="flex gap-3 mb-3">
        {options.map((option) => (
          <button
            key={option.hexCode}
            onClick={() => onSelect(option)}
            className={`w-5 h-5 border transition-all cursor-pointer duration-200 ${
              selected?.hexCode === option.hexCode
                ? 'ring-1 ring-offset-1 ring-black'
                : 'ring-1 ring-offset-1 ring-border'
            }`}
            style={{ backgroundColor: option.hexCode }}
            aria-label={option.name}
          />
        ))}
      </div>

      {selected && <p className="text-xs font-light">{selected.name}</p>}
    </div>
  );
}
