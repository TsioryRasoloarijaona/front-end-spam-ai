export default function Xl({ name }: { name: string }) {
  return (
    <div className="flex items-end gap-2 border border-gray-300 w-fit px-3 py-1">
      <img src="/xls.png" alt="PDF Icon" />
      <span>{name}</span>
    </div>
  );
}
