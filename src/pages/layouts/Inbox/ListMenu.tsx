import { useState } from "react";
import { Link } from "react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoFilterOutline } from "react-icons/io5";

interface ListMenuProps {
  menu: React.ReactNode;
  id: number;
}

export default function ListMenu({ param }: { param: ListMenuProps[] }) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="py-5 px-3 flex items-center justify-between">
        <div className="w-full flex items-center gap-2 ">
          <input
            type="text"
            className="p-2 w-3/4 border border-gray-300 rounded-md text-sm"
            placeholder="search"
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="filter" />
              <IoFilterOutline className="text-gray-500 text-3xl" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>filter</SelectLabel>
                <SelectItem value="apple">email</SelectItem>
                <SelectItem value="banana">object</SelectItem>
                <SelectItem value="blueberry">content</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ul>
        {param.map((param, i) => (
          <li
            className={`border-b border-gray-200 ${
              selected == i ? "bg-[rgb(236,236,240)]" : ""
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
