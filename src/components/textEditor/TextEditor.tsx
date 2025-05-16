import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import RecipientInput from "../RecipientInput";
import { Button } from "../ui/button";
import MessageRequest from "@/interfaces/MessageRequestInterface";
import { postMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { BeatLoader } from "react-spinners";

export default function TextEditor({ onCloseDialog }: { onCloseDialog?: () => void }) {
  const myColors = [
    "purple",
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
    "white",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ color: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
  ];

  const [code, setCode] = useState("");
  const [recipients, setRecipients] = useState<string[]>([]);
  const [object, setObject] = useState<string>("");
  const [buttonSate, setButtonState] = useState(true);

  const handleProcedureContentChange = (content: any) => {
    setCode(content);
    console.log("Content:", content);
  };

  const handleRecipientsChange = (newRecipients: string[]) => {
    setRecipients(newRecipients);
    console.log("Recipients:", newRecipients);
  };

  const token: string = Cookies.get("authToken") || "";

  const submit = async (e: React.FormEvent) => {
    setButtonState(false)
    e.preventDefault();
    const messageRequest: MessageRequest = {
      object: object,
      body: code,
      receivers: recipients,
    };

    try {
      await postMethod<MessageRequest>(
        token.replace(/"/g, ""),
        "send",
        messageRequest
      );

      toast.success("Message sent successfully");
      if (onCloseDialog) onCloseDialog();
    } catch (error) {
      toast.error("Failed to send message");
      setButtonState(true)
    }
  };

  return (
    <>
      <form className="mt-4 space-y-4 w-full h-full" onSubmit={submit}>
        <div className="w-full text-sm">
          <RecipientInput onRecipientsChange={handleRecipientsChange} />{" "}
        </div>
        <div>
          <input
            type="text"
            placeholder="object"
            className="border-b border-b-gray-300 p-2 outline-none w-full text-sm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setObject(e.target.value)
            }
          />
        </div>
        <div className="w-full relative flex-1  min-h-[325px] max-h-[375px]">
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={code}
            onChange={handleProcedureContentChange}
            className="w-full border-none"
          />
        </div>
        <div>
            <Button type="submit" disabled={!buttonSate}>
            {buttonSate ? "send" : <BeatLoader color="#ffffff" size={5}/>}
          </Button>
        </div>
      </form>
    </>
  );
}
