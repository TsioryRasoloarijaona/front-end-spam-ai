import { Outlet } from "react-router";
import Menu from "../Menu";
import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CiLogout } from "react-icons/ci";
import { MdQuestionMark } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
export default function Layout() {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col">
        <div className="h-fit w-full flex justify-between items-center  border-b border-gray-300 py-3 px-7">
          <div>
            <h1 className="text-2xl font-extrabold ">Smail LOgo</h1>
          </div>
          <div className="flex gap-3 items-center  justify-end">
            <div className="mr-9 flex gap-8">
              <CiLogout className="text-xl" />
              <IoIosNotifications className="text-xl" />
              <TiMessages className="text-xl" />
              <MdQuestionMark className="text-xl" />
              <MdFormatListNumbered className="text-xl" />

            </div>
            <div className=" p-3 rounded-full bg-[rgb(236,236,240)] w-[50px] h-[50px] flex justify-center items-center text-black font-bold">
              TR
            </div>
            <div className="text-sm">
              <p>rasoloariajoana nahoma</p>
            </div>
          </div>
        </div>
        <div className="flex-grow grid grid-cols-[1fr_5fr]">
          <div className="h-full border-r border-gray-300 ">
            <Menu />
          </div>
          <div className="h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
