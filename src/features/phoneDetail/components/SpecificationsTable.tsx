type SpecEntry = {
  label: string;
  value: string;
};

type SpecsProps = {
  brand: string;
  name: string;
  description: string;
  specs: {
    screen: string;
    resolution: string;
    processor: string;
    mainCamera: string;
    selfieCamera: string;
    battery: string;
    os: string;
    screenRefreshRate: string;
  };
};

export function SpecificationsTable({
  brand,
  name,
  description,
  specs,
}: SpecsProps) {
  const entries: SpecEntry[] = [
    { label: 'Brand', value: brand },
    { label: 'Name', value: name },
    { label: 'Description', value: description },
    ...Object.entries(specs).map(([key, value]) => ({
      label: key.replace(/([A-Z])/g, ' $1').toUpperCase(),
      value,
    })),
  ];

  return (
    <section className="mt-16 w-full">
      <h2 className="text-xl uppercase font-light mb-10">Specifications</h2>
      <div className="divide-y border-t border-b">
        {entries.map(({ label, value }) => (
          <div key={label} className="grid grid-cols-5 py-4 text-sm">
            <span className="uppercase font-light text-xs text-primary col-span-2">
              {label}
            </span>
            <span className="font-light text-xs col-span-3">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
