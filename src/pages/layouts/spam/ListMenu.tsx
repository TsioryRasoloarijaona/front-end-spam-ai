import { useState } from "react";
import { Link } from "react-router";
import { usePageStoreSpam } from "@/hooks/pageStoreSpam";

export interface ListMenuProps {
  menu: React.ReactNode;
  id: string;
}

export default function ListMenu({ param }: { param: ListMenuProps[] }) {
  const [selected, setSelected] = useState(0);

  const { incrementPage, decrementPage, currentPage, totalPage } =
    usePageStoreSpam();

  return (
    <>
      <div className="flex px-7 justify-between items-center py-4 sticky top-0 bg-white z-10 gap-2">
        <div className=" flex items-center justify-between text-sm">
          <p className="px-3 py-1 border rounded-full text-gray-600 border-gray-600 text-sm">
            dash / sent
          </p>
        </div>
        <div>
          <button
            className="px-3 py-1 rounded-md text-sm border border-gray-300 disabled:opacity-50"
            onClick={() => decrementPage()}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="mx-2 text-sm">
            Page {currentPage} / {totalPage}
          </span>
          <button
            className="px-3 py-1 rounded-md text-sm border border-gray-300 disabled:opacity-50"
            onClick={() => incrementPage()}
            disabled={currentPage === totalPage}
            aria-label="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
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
