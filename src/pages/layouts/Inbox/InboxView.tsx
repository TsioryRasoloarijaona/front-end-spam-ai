import MessageView from "@/components/MessageView";
import { useOutletContext, useParams } from "react-router";
import { MessageToSend } from "@/interfaces/dataTypes";

export default function InboxView() {
  const { id } = useParams<{ id: string }>(); 
  const { allMessages } = useOutletContext<{ allMessages : MessageToSend[] }>(); 

 
  const mail = allMessages?.find((email) => email.id.toString() === id);

  
  if (!mail) {
    return <p>{id}</p>;
  }

  return (
    <>
      <MessageView content={mail} />
    </>
  );
}

