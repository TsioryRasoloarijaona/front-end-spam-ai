export default function Pdf({ name }: { name: string }) {
  return (
    <div className="flex items-end gap-2 border border-gray-300 w-fit px-3 py-1 text-sm">
      <img src="/pdf.png" alt="PDF Icon" />
      <span>{name}</span>
    </div>
  );
}
