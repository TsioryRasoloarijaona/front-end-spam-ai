import { useState } from "react";
import { Link } from "react-router";
import { usePageStore } from "@/hooks/pageStore";

export interface ListMenuProps {
  menu: React.ReactNode;
  id: number;
}

export default function ListMenu({ param }: { param: ListMenuProps[] }) {
  const [selected, setSelected] = useState(0);

  const { setCurrentPage, currentPage, totalPage } = usePageStore();

  return (
    <>
      
        <div className="flex px-7 justify-end items-center py-4 sticky top-0 bg-white z-10">
          {Array.from({ length: totalPage }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md text-sm ${
          currentPage === i + 1 ? "border border-gray-400" : ""
              }`}
              onClick={() => {
          setCurrentPage(i + 1);
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      

      <ul className="">
        {param.map((param, i) => (
          <div
            className={`border-b border-gray-200 ${
              selected == i ? "bg-[rgb(233,233,236)]" : ""
            }`}
            key={i}
            onClick={() => setSelected(i)}
          >
            <Link to={param.id.toString()}>{param.menu}</Link>
          </div>
        ))}
      </ul>
    </>
  );
}
