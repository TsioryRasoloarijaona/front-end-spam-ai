import { Outlet } from "react-router";
import Sections from "@/components/Sections";
import ListMenu from "./ListMenu";
import { MessageToSend } from "@/interfaces/dataTypes";
import { useState, useEffect } from "react";
import { getMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";
import MessageMenu from "@/components/MessageMenu";
import { useWebSocket } from "../../../hooks/webSocketContext";
import { messagesPage } from "@/interfaces/dataTypes";
import { ListMenuProps } from "./ListMenu";
import { usePageStore } from "@/hooks/pageStore";

export default function Layout() {
  const listMenu: ListMenuProps[] = [];
  const [emails, setEmails] = useState<MessageToSend[]>();
  const { messages } = useWebSocket();
  const { setTotalPage, currentPage } = usePageStore();

  const token: string = Cookies.get("authToken") || "";
  const page: number = currentPage - 1;

  const getEmails = async () => {
    try {
      const res: messagesPage = await getMethod<messagesPage>(
        token,
        "messages/" + page,
        null
      );
      console.log("User data:", res);
      setEmails(res.content);
      setTotalPage(res.totalPages);
    } catch (error: any) {
      console.error("Error response:", error.response);
    }
  };

  useEffect(() => {
    console.log(token);
    getEmails();
  }, [currentPage]);

  
  const allMessages =currentPage == 1 ? [...(messages || []), ...(emails || [])] : [...(emails || [])];

  if (Array.isArray(allMessages) && allMessages.length > 0) {
    allMessages.forEach((email) => {
      listMenu.push({
        menu: <MessageMenu body={email} />,
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
