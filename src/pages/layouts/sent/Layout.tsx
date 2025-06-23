import { Outlet } from "react-router";
import Sections from "@/components/Sections";
import ListMenu from "./ListMenu";
import { useState, useEffect } from "react";
import { getMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";
import MessageMenu from "@/components/MessageMenu";
import { useWebSocket } from "@/hooks/webSocketContext";
import { MessageStructure } from "@/interfaces/dataTypes";
import { useEmailAddressStore } from "@/hooks/emailAddressStore";
import useSentMailStore from "@/hooks/sentMailStore";

interface ListMenuProps {
  menu: React.ReactNode;
  id: string;
}

export default function Layout() {
  const listMenu: ListMenuProps[] = [];
 
  const { sentMessages } = useWebSocket();
  const { email } = useEmailAddressStore();
  const { addMail , sentMails } = useSentMailStore();

  const token: string = Cookies.get("authToken") || "";

  const getEmails = async () => {
    try {
      const res: MessageStructure[] = await getMethod<MessageStructure[]>(
        token,
        `api/user/sent/${email}`,
        null
      );
     
      addMail(res);
    } catch (error: any) {
      console.error("Error response:", error.response);
    }
  };

  useEffect(() => {
    getEmails();
  }, []);

  const allMessages = [...sentMessages, ...(sentMails || [])];
  console.log("allMessages", allMessages);

  if (Array.isArray(allMessages) && allMessages.length > 0) {
    allMessages?.forEach((email) => {
      listMenu.push({
        menu: <MessageMenu body={email} type="SENT " />,
        id: email.id,
      });
    });
  }

  return (
    <Sections
      menu={<ListMenu param={listMenu} />}
      view={<Outlet context={{ allMessages }} />}
    />
  );
}
