import MessageView from "@/components/MessageView";
import { useOutletContext, useParams } from "react-router";
import { MessageToSend } from "@/interfaces/dataTypes";

export default function InboxView() {
  const { id } = useParams<{ id: string }>(); // Récupère l'id depuis les paramètres
  const { emails } = useOutletContext<{ emails: MessageToSend[] }>(); // Récupère les emails depuis le context

 
  const mail = emails?.find((email) => email.id === id);

  
  if (!mail) {
    return <p>Email not found</p>;
  }

  return (
    <>
      <MessageView content={mail} />
    </>
  );
}

