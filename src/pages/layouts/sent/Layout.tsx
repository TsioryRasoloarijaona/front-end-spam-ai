import { Outlet } from "react-router";
import Sections from "@/components/Sections";
import ListMenu from "./ListMenu";
import { MessageToSend } from "@/interfaces/dataTypes";
import { useState, useEffect } from "react";
import { getMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";
import MessageMenu from "@/components/MessageMenu";
import { useWebSocket } from "@/hooks/webSocketContext";
import { SentMessages } from "@/interfaces/SentMessages";

interface ListMenuProps {
  menu: React.ReactNode;
  id : number;
}

export default function Layout() {
  const listMenu : ListMenuProps[] = [];
  const [emails, setEmails] = useState<SentMessages[]>();
  const { sentMessages } = useWebSocket();

  const token: string = Cookies.get("authToken") || "";

  const getEmails = async () => {
    try {
      const res: SentMessages[] = await getMethod<SentMessages[]>(
        token,
        "sent",
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

  const allMessages = [...sentMessages, ...(emails || [])];
  console.log("allMessages", allMessages);

  if (Array.isArray(allMessages) && allMessages.length > 0) {
    allMessages?.forEach((email) => {
      listMenu.push({
        menu : <MessageMenu body2={email}/> ,
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

