import { Outlet } from "react-router";
import Sections from "@/components/Sections";
import ListMenu from "./ListMenu";
import { MessageToSend } from "@/interfaces/dataTypes";
import { useState, useEffect } from "react";
import { getMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";
import MessageMenu from "@/components/MessageMenu";
import { useWebSocket } from "./webSocketContext";

interface ListMenuProps {
  menu: React.ReactNode;
  id : number;
}

export default function Layout() {
  const listMenu : ListMenuProps[] = [];
  const [emails, setEmails] = useState<MessageToSend[]>();
  const { messages } = useWebSocket();

  const token: string = Cookies.get("authToken") || "";

  const getEmails = async () => {
    try {
      const res: MessageToSend[] = await getMethod<MessageToSend[]>(
        token,
        "api/account/messages",
        null
      );
      console.log("User data:", res);
      setEmails(res);
    } catch (error: any) {
      console.error("Error response:", error.response);
    }
  };

  useEffect(() => {
    console.log(token);
    getEmails();
  }, []);

  const allMessages = [...messages, ...(emails || [])];

  if (Array.isArray(allMessages) && allMessages.length > 0) {
    allMessages?.forEach((email) => {
      listMenu.push({
        menu : <MessageMenu body={email}/> ,
        id : email.id
      });
    });
  }

  return (
    <Sections
      menu={<ListMenu param={listMenu} />}
      view={<Outlet context={{allMessages}} />}
    />
  );
}
