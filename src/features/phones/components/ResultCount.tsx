type Props = {
  count: number;
};

export function ResultCount({ count }: Props) {
  return (
    <p className="text-xs font-light text-primary mt-4 mb-4">{count} RESULTS</p>
  );
}
