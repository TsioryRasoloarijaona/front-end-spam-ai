interface propsType {
  menu: React.ReactNode;
  view: React.ReactNode;
}

export default function Sections({ menu, view }: propsType) {
  return (
    <div className="grid grid-cols-2 h-full w-full">
      <div className="h-full border-r border-gray-200 ">{menu}</div>
      <div className="h-full ">{view}</div>
    </div>
  );
}
