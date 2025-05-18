import { Outlet } from "react-router";
import Sections from "@/components/Sections";
import ListMenu from "./ListMenu";
import { useEffect } from "react";
import { getMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";
import MessageMenu from "@/components/MessageMenu";
import { useWebSocket } from "../../../hooks/webSocketContext";
import { messagesPage } from "@/interfaces/dataTypes";
import { ListMenuProps } from "./ListMenu";
import { usePageStore } from "@/hooks/pageStore";
import useMailStore from "@/hooks/emailStore";

export default function Layout() {
  const listMenu: ListMenuProps[] = [];

  const { messages } = useWebSocket();
  const { currentPage, setTotalPage } = usePageStore();
  const { addMail, mails } = useMailStore();

  const token: string = Cookies.get("authToken") || "";

  const getEmails = async () => {
    try {
      const res: messagesPage = await getMethod<messagesPage>(
        token,
        `messages/${currentPage - 1}`,
        null
      );
      addMail(currentPage - 1, res.content);
      setTotalPage(res.totalPages);
    } catch (error: any) {
      console.error("Error response:", error.response);
    }
  };

  useEffect(() => {
    if (mails[currentPage - 1]) {
      return;
    } else {
      getEmails();
    }
  }, [currentPage]);

  const allMessages =
    currentPage == 1
      ? [...(messages || []), ...(mails[0] || [])]
      : [...(mails[currentPage - 1] || [])];

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
