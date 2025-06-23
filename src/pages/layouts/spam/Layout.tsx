import { Outlet } from "react-router";
import Sections from "@/components/Sections";
import ListMenu from "../Inbox/ListMenu";
import { useEffect } from "react";
import { getMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";
import MessageMenu from "@/components/MessageMenu";
import { useWebSocket } from "@/hooks/webSocketContext";
import { messagesPage } from "@/interfaces/dataTypes";
import { ListMenuProps } from "../Inbox/ListMenu";
import { usePageStoreSpam } from "@/hooks/pageStoreSpam";
import useSpamStore from "@/hooks/SpamStore";
import { useEmailAddressStore } from "@/hooks/emailAddressStore";


export default function Layout() {
  const listMenu: ListMenuProps[] = [];

  const { spamMessages } = useWebSocket();
  const { currentPage, setTotalPage } = usePageStoreSpam();
  const { addMail, mails } = useSpamStore();
  const {email} = useEmailAddressStore() ;


  const token: string = Cookies.get("authToken") || "";
  
  const getEmails = async () => {
    if (!email || !email.includes("@")) return;
    try {
      const res: messagesPage = await getMethod<messagesPage>(
        token,
        `api/user/received/${email}/${currentPage - 1}/${true}`,
        null
      );
      addMail(currentPage - 1, res.content);
      setTotalPage(res.totalPages);
    } catch (error: any) {
      console.error("Error response:", error.response);
    }
  };

  useEffect(() => {
    if (!email || !email.includes("@")) return;
    if (mails[currentPage - 1]) {
      return;
    } else {
      getEmails();
    }
  }, [email , currentPage]);

  const allMessages =
    currentPage == 1
      ? [...(spamMessages || []), ...(mails[0] || [])]
      : [...(mails[currentPage - 1] || [])];

  if (Array.isArray(allMessages) && allMessages.length > 0) {
    allMessages.forEach((email) => {
      listMenu.push({
        menu: <MessageMenu body={email} type="RECEIVED" />,
        id: email.id,
      });
    });
  }

  return (
    <Sections
      menu={<ListMenu param={listMenu} />}
      view={<Outlet/>}
    />
  );
}
