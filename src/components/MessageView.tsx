import { MessageToSend } from "@/interfaces/dataTypes";
import { formatDateTime } from "@/utils/converter";
import Pdf from "./attachment/Pdf";
import Docs from "./attachment/Docs";
import Img from "./attachment/Img";
import Xl from "./attachment/Xl";
import Translator from "./Translator";
import { stripHtmlTags } from "@/utils/stringUtils";
import { SentMessages } from "@/interfaces/SentMessages";
import { AiOutlineDislike } from "react-icons/ai";

interface MessageViewProps {
  content?: MessageToSend | null;
  content1?: SentMessages | null;
}

export default function MessageView({ content, content1 }: MessageViewProps) {
  if (content) {
    return (
      <div className=" w-full p-7 space-y-5">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-sm">
            object : {content?.object}
          </div>
          <div className="flex items-center gap-4">
            <button className=" ">
              <AiOutlineDislike className="text-xl" />
            </button>
            <Translator text={stripHtmlTags(content.body)} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div className="bg-[rgb(236,236,240)] text-black font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center uppercase">
              <p>{`${content.firstName[0]}${content.lastName[0]}`}</p>
            </div>
            <div className="text-sm">
              <p>{`${content.firstName} ${content.lastName}`}</p>
              <p className="font-bold">{content.email}</p>
            </div>
          </div>
          <div>
            <p className="text-sm">{formatDateTime(content?.sendDateTime)}</p>
          </div>
        </div>
        <div
          className="leading-6 text-sm"
          dangerouslySetInnerHTML={{ __html: content?.body }}
        ></div>
        <div className="flex flex-row gap-3 items-center text-sm">
          <Pdf name="document.pdf" />
          <Docs name="document.docx" />
          <Img name="document.png" />
          <Xl name="document.xlsx" />
        </div>
      </div>
    );
  }
  if (content1) {
    return (
      <div className=" w-full p-7 space-y-5">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-sm">
            object : {content1?.object}
          </div>
          <Translator text={stripHtmlTags(content1.body)} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            {content1.receivers.map((receiver, idx) => (
              <div
                key={idx}
                className="text-white font-bold w-[35px] h-[35px] rounded-full flex items-center justify-center uppercase border-2 border-white text-xs"
                style={{
                  backgroundColor: `hsl(${Math.floor(
                    Math.random() * 360
                  )}, 50%, 30%)`,
                  zIndex: content1.receivers.length - idx,
                }}
              >
                <p>{receiver[0]}</p>
              </div>
            ))}
            <span className="ml-4 text-sm font-semibold">
              {content1.receivers.join(" , ")}
            </span>
          </div>
          <div>
            <p className="text-sm">{formatDateTime(content1?.sendDateTime)}</p>
          </div>
        </div>
        <div
          className="leading-6 text-sm"
          dangerouslySetInnerHTML={{ __html: content1?.body }}
        ></div>
        <div className="flex flex-row gap-3 items-center text-sm">
          <Pdf name="document.pdf" />
          <Docs name="document.docx" />
          <Img name="document.png" />
          <Xl name="document.xlsx" />
        </div>
      </div>
    );
  }
}
