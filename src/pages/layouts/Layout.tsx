import { Outlet } from "react-router";
import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CiLogout } from "react-icons/ci";
import { MdQuestionMark, MdFormatListNumbered } from "react-icons/md";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { getMethod } from "@/utils/fecthing";
import { AccountDTO } from "@/interfaces/dataTypes";
import { SidebarProvider } from "@/components/ui/sidebar";
import  AppSideBar  from "@/components/AppSideBar";
import { CustomTrigger } from "@/components/CustomTrigger";
import NewMsg from "@/components/NewMsg";

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
    getUser();
  }, []);

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSideBar />
      <div className="w-full h-[100vh] flex flex-col">
        {/* Top Bar */}
        <div className="h-fit w-full flex justify-between items-center border-b border-gray-300 py-2 px-7">
          <div className="flex items-center gap-3">
            {/* Trigger Button + Logo */}
            <CustomTrigger />
            <img src="/mail.png" alt="maily" className="w-8 h-8" />
            <p className="text-2xl text-teal-700 font-extrabold">MailY</p>
          </div>
          <div className="flex gap-3 items-center justify-end">
            <div className="mr-9 flex gap-8">
              <CiLogout className="text-xl" />
              <IoIosNotifications className="text-xl" />
              <TiMessages className="text-xl" />
              <MdQuestionMark className="text-xl" />
              <MdFormatListNumbered className="text-xl" />
            </div>
            <div className="p-3 rounded-full bg-[rgb(236,236,240)] w-[40px] h-[40px] flex justify-center items-center text-black font-bold uppercase">
              {(user?.peopleInfoDTO?.firstName?.[0] ?? "") +
                (user?.peopleInfoDTO?.lastName?.[0] ?? "")}
            </div>
            <div className="text-sm">
              <p>{`${user?.peopleInfoDTO?.firstName} ${user?.peopleInfoDTO?.lastName}`}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 relative overflow-hidden">
          <Outlet />
        </div>

        {/* Floating Button */}
        <div className="absolute bottom-4 right-4 px-3 py-2">
          <NewMsg />
        </div>
      </div>
    </SidebarProvider>
  );
}
