import MessageView from "@/components/MessageView";
import { useOutletContext, useParams } from "react-router";
import { SentMessages } from "@/interfaces/SentMessages";

export default function InboxView() {
  const { id } = useParams<{ id: string }>(); 
  const { allMessages } = useOutletContext<{ allMessages : SentMessages[] }>(); 

 
  const mail = allMessages?.find((email) => email.id.toString() === id);

  
  if (!mail) {
    return <p>select a msg to open</p>;
  }

  return (
    <>
      <MessageView content1={mail} />
    </>
  );
}

