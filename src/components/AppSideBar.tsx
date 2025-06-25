import { useState } from "react";
import { LuInbox } from "react-icons/lu";
import { IoSendOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router";
import { useEmailAddressStore } from "@/hooks/emailAddressStore";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface Menu {
  link: string;
  name: string;
  icon: React.ReactNode;
  number: number | null;
}

const AppSideBar: React.FC = () => {
  const { email } = useEmailAddressStore();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuList: Menu[] = [
    { link: "/dash/inbox/0", name: "Inbox", icon: <LuInbox />, number: null },
    {
      link: "/dash/sent/0",
      name: "Sent",
      icon: <IoSendOutline />,
      number: null,
    },
    {
      link: "/dash/spam/0",
      name: "Spam",
      icon: <RiDeleteBin6Line />,
      number: null,
    },
  ];

  return (
    <Sidebar collapsible="icon" className="bg-[#EEF0F2]">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <div className="flex items-center gap-1 mb-7 mt-3">
            <div
              className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-base"
              style={{
                backgroundColor: `#${Math.floor(
                  (email?.charCodeAt(0) || 0) * 999999
                )
                  .toString(16)
                  .padStart(6, "0")
                  .slice(0, 6)}`,
              }}
            >
              {email ? email[0] : "?"}
            </div>
            <SidebarGroupLabel className="text-base text-black font-semibold">
              {email ? email : "No Email Selected"}
            </SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuList.map((menu, i) => (
                <SidebarMenuItem key={menu.name}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => setSelectedIndex(i)}
                    className={
                      selectedIndex === i
                        ? "text-black font-bold bg-[rgb(233,233,236)]"
                        : "text-gray-400 font-bold "
                    }
                  >
                    <Link to={menu.link} className="flex items-center gap-2">
                      {menu.icon}
                      <span className="text-sm">{menu.name}</span>
                      {menu.number !== null && menu.number > 0 && (
                        <span className="ml-2 text-xs bg-gray-200 rounded-full px-2">
                          {menu.number}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSideBar;
