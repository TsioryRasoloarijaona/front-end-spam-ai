import MessageView from "@/components/MessageView";
import { MessageStructure } from "@/interfaces/dataTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";

export default function InboxView() {
  const { id } = useParams<{ id: string }>();
  const [mail, setMail] = useState<MessageStructure>();
  const token: string = Cookies.get("authToken") || "";
  const getEmail = async () => {
    try {
      const res: MessageStructure = await getMethod<MessageStructure>(
        token,
        `api/user/byId/${id}`,
        null
      );
      setMail(res)
    } catch (error: any) {
      console.error("Error response:", error.response);
    }
  };

  useEffect(()=>{
    getEmail()
  } , [id])

  if (!mail) {
    return <p>select a msg to open clicked {id}</p>;
  }

  return (
    <>
      <MessageView content={mail} type="RECEIVED" />
    </>
  );
}
