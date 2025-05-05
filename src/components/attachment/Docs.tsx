export default function Docs({ name }: { name: string }) {
  return (
    <div className="flex items-end gap-2 border border-gray-300 w-fit px-3 py-1">
      <img src="/docs.png" alt="PDF Icon" />
      <span>{name}</span>
    </div>
  )
}
