import { useState } from "react";
import { RiInboxFill } from "react-icons/ri";
import { Link } from "react-router";


export default function ListMenu({ menu }: { menu: React.ReactNode[] }) {

  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="py-5 px-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          received message
          <RiInboxFill className="text-xl font-black" />
        </div>
      </div>
      <ul>
        {menu.map((menu, i) => (
          <li
            className={`border-b border-gray-200 ${
              selected == i ? "bg-[rgb(236,236,240)]" : ""
            }`}
            key={i}
            onClick={() => setSelected(i)}
          >
            <Link to={i.toString()}>{menu}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
