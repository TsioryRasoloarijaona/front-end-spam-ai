import { Outlet } from "react-router";
import Sections from "@/components/Sections";
import ListMenu from "./ListMenu";
import { MessageToSend } from "@/interfaces/dataTypes";
import { useState, useEffect } from "react";
import { getMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";
import MessageMenu from "@/components/MessageMenu";
import { useWebSocket } from "./webSocketContext";

export default function Layout() {
  const [emails, setEmails] = useState<MessageToSend[]>();
  const {messages} = useWebSocket();

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

const allMessages = [...(emails || []), ...messages];


console.log("All messages:", allMessages);

  let count : number = 0;

  const menu: React.ReactNode[] = [];
  if (Array.isArray(emails) && emails.length > 0) {
    allMessages?.forEach((email) => {
      email.id = count.toString();
      count++;
      menu.push(<MessageMenu body={email} />);
    });
  }

  return <Sections menu={<ListMenu menu={menu} />} view={<Outlet context={{allMessages}}/>} />;
}
