import { Outlet } from "react-router";
import { IoIosNotifications } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getMethod, postMethod } from "@/utils/fecthing";
import { AccountDTO } from "@/interfaces/dataTypes";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSideBar from "@/components/AppSideBar";
import { CustomTrigger } from "@/components/CustomTrigger";
import NewMsg from "@/components/NewMsg";
import { useEmailAddressStore } from "@/hooks/emailAddressStore";
import { CiSaveDown2 } from "react-icons/ci";
import { toast } from "sonner";

export default function Layout() {
  const [user, setUser] = useState<AccountDTO>();
  const token: string = Cookies.get("authToken") || "";
  const { setEmail, email } = useEmailAddressStore();

  const getUser = async () => {
    try {
      const res: AccountDTO = await getMethod<AccountDTO>(
        token,
        "api/account/info",
        null
      );
      console.log("User data:", res);
      setUser(res);
      setEmail(res.email);
    } catch (error: any) {
      console.error("Error response:", error.response);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const downloadEmail = async () => {
    const loadingToast = toast.loading("downloading emails...");
    try {
      await postMethod<string>(
        token.replace(/"/g, ""),
        `api/user/download/${email}`,
        ""
      );
      toast.dismiss(loadingToast);
      toast.success("emails downloaded successfully");
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

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
              <button className="" onClick={downloadEmail}>
                <CiSaveDown2 className="text-xl text-black" />
              </button>
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
