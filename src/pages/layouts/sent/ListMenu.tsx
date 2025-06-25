import { useState } from "react";
import { Link } from "react-router";

interface ListMenuProps {
  menu: React.ReactNode;
  id: string;
}

export default function ListMenu({ param }: { param: ListMenuProps[] }) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="py-4 px-7 flex items-center justify-between text-sm">
        <p className="px-3 py-1 border rounded-full text-gray-600 border-gray-600 text-sm">dash / sent</p>
      </div>
      <ul>
        {param.map((param, i) => (
          <li
            className={`border-b border-gray-200 ${
              selected == i ? "bg-[rgb(233,233,236)]" : ""
            }`}
            key={i}
            onClick={() => setSelected(i)}
          >
            <Link to={param.id.toString()}>{param.menu}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
