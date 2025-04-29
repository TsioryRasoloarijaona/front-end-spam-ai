import { Outlet } from "react-router";
import Menu from "../Menu";
import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CiLogout } from "react-icons/ci";
import { MdQuestionMark } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { getMethod } from "@/utils/fecthing";
import { useState, useEffect } from "react";
import { AccountDTO } from "@/interfaces/dataTypes";
import Cookies from "js-cookie";

export default function Layout() {
  const [user, setUser] = useState<AccountDTO>();
  const token: string = Cookies.get("authToken") || "";

  const getUser = async () => {
    try {
      const res: AccountDTO = await getMethod<AccountDTO>(
        token,
        "api/account/info",
        null
      );
      console.log("User data:", res);
      setUser(res);
    } catch (error: any) {
      console.error("Error response:", error.response);
    }
  };

  useEffect(() => {
    console.log(token);
    getUser();
  }, []);

  return (
    <>
      <div className="w-full h-[100vh] flex flex-col">
        <div className="h-fit w-full flex justify-between items-center  border-b border-gray-300 py-3 px-7">
          <div className=" w-[120px] flex items-center gap-2 ">
            <img src="/maily_icon.png" alt="maily" className="w-full h-full" />
            
          </div>
          <div className="flex gap-3 items-center  justify-end">
            <div className="mr-9 flex gap-8">
              <CiLogout className="text-xl" />
              <IoIosNotifications className="text-xl" />
              <TiMessages className="text-xl" />
              <MdQuestionMark className="text-xl" />
              <MdFormatListNumbered className="text-xl" />
            </div>
            <div className="p-3 rounded-full bg-[rgb(236,236,240)] w-[50px] h-[50px] flex justify-center items-center text-black font-bold uppercase">
              {(user?.peopleInfoDTO?.firstName?.[0] ?? "") +
                (user?.peopleInfoDTO?.lastName?.[0] ?? "")}
            </div>
            <div className="text-sm">
              <p>{`${user?.peopleInfoDTO?.firstName} ${user?.peopleInfoDTO?.lastName}`}</p>
            </div>
          </div>
        </div>
        <div className="flex-grow grid grid-cols-[1fr_5fr]">
          <div className="h-full border-r border-gray-300">
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
