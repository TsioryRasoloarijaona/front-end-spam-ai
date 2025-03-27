import React from "react";
import { Link } from "react-router";
import { useState } from "react";
import { LuInbox } from "react-icons/lu";
import { IoSendOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiDraftLine } from "react-icons/ri";
import { MessagesSquareIcon } from "lucide-react";
import NewMsg from "@/components/NewMsg";

interface menu {
  link: string;
  name: string;
  icon: React.ReactNode;
  number: number | null;
}

const Menu: React.FC = () => {
  const [index, setIndex] = useState(0);

  const menuList: menu[] = [
    { link: "/dash/inbox/2", name: "inbox", icon: <LuInbox />, number: 0 },
    { link: "/dash/sent", name: "sent", icon: <IoSendOutline />, number: null },
    {
      link: "/dash/spam",
      name: "spam",
      icon: <RiDeleteBin6Line />,
      number: 26,
    },
    { link: "/dash/draft", name: "draft", icon: <RiDraftLine />, number: 37 },
  ];

  return (
    <div className="w-full h-full">
      <div className="px-7">
        <div className="mb-6 mt-10">
          <NewMsg />
        </div>
        <ul className="space-y-3">
          {menuList.map((menu, i) => (
            <li
              key={i}
              className={`py-2.5 px-2 rounded-md flex justify-between font-bold ${
                index === i ? " text-black font-bold" : "text-gray-400"
              }`}
              onClick={() => setIndex(i)}
            >
              <Link to={menu.link} className="flex items-center gap-2">
                {menu.icon}
                {menu.name}
              </Link>
              <p>{menu.number}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
