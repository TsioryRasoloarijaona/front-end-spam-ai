import { useState } from "react";
import MessageMenu from "@/components/MessageMenu";
import email from "@/interfaces/EmailInterface";
import { RiInboxFill } from "react-icons/ri";



export default function ListMenu() {
  const data: email = {
    email: "smail@smail.com",
    dateTime: "12/05/2025 19:21",
    content: "like ths ",
    object: "me",
  };
  const [selected, setSelected] = useState(0);
  const menu: React.ReactNode[] = [
    <MessageMenu body={data} />,
    <MessageMenu body={data} />,
    <MessageMenu body={data} />,
    <MessageMenu body={data} />,
    <MessageMenu body={data} />,
    <MessageMenu body={data} />,
  ];
  return (
    <>
      <div className="py-5 px-3 flex items-center justify-between">
        <div className="flex items-center gap-2">received message<RiInboxFill className="text-xl font-black"/></div>
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
            {menu}
          </li>
        ))}
      </ul>
    </>
  );
}
