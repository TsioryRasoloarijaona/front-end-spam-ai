import email from "../interfaces/EmailInterface";
import { MdAttachFile } from "react-icons/md";

interface props {
  body: email;
}

export default function MessageMenu({ body }: props) {
  return (
    <div className="flex flex-row space-x-4 h-[100px] overflow-hidden py-3 px-7">
      <div className="bg-[rgb(136,211,211)] text-white font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center">
        <p>TR</p>
      </div>
      <div className="w-11/12 ">
        <p className="font-bold text-black text-sm flex items-center justify-between">
          <p>{body.email}</p>
          <p>yesterday</p>
        </p>
        <p className="mb-2 text-sm font-bold ">
          {body.object}
        </p>
        <p className="truncate overflow-y-hidden text-ellipsis text-sm flex items-center justify-between">
          <p>{body.content}</p>
          <MdAttachFile className="text-xl text-gray-400"/>
        </p>
      </div>
    </div>
  );
}
