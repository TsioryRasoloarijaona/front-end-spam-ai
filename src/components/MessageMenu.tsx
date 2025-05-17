import { MdAttachFile } from "react-icons/md";
import { MessageToSend } from "@/interfaces/dataTypes";
import { SentMessages } from "@/interfaces/SentMessages";
import { timeAgo } from "@/utils/converter";
import { stripHtmlTags } from "@/utils/stringUtils";

interface MessageMenuProps {
  body?: MessageToSend | null;
  body2?: SentMessages | null;
}

export default function MessageMenu({ body, body2 }: MessageMenuProps) {
  if (body) {
    return (
      <div className="flex flex-row space-x-4 h-fit overflow-hidden py-2 px-7">
        <div
          className={`text-white font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center uppercase`}
          style={{
            backgroundColor: `hsl(${Math.floor(
              Math.random() * 360
            )}, 50%, 30%)`,
          }}
        >
          <p>{`${body.accountDTO?.peopleInfoDTO?.firstName[0]}${body.accountDTO?.peopleInfoDTO?.lastName[0]}`}</p>
        </div>
        <div className="w-11/12 ">
          <p className="font-semibold text-black text-sm flex items-center justify-between">
            <span>{body.accountDTO?.email}</span>
            <span>{timeAgo(body.sendDateTime)}</span>
          </p>
          <p className="mb-2 text-sm font-semibold ">object : {body.object}</p>
          <p className="truncate overflow-y-hidden text-ellipsis text-sm flex items-center justify-between">
            <span>body : {stripHtmlTags(body.body)}</span>
            <MdAttachFile className="text-xl text-gray-400" />
          </p>
        </div>
      </div>
    );
  }

  if (body2) {
    return (
      <div className="flex flex-row space-x-4 h-fit overflow-hidden py-2 px-7">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center -space-x-3">
              {body2.receivers.map((receiver, idx) => (
                <div
                  key={idx}
                  className="text-white font-bold w-[35px] h-[35px] rounded-full flex items-center justify-center uppercase border-2 border-white text-xs"
                  style={{
                    backgroundColor: `hsl(${Math.floor(
                      Math.random() * 360
                    )}, 50%, 30%)`,
                    zIndex: body2.receivers.length - idx,
                  }}
                >
                  <p>{receiver[0]}</p>
                </div>
              ))}
              <span className="ml-4 text-sm text-black font-medium">
                {body2.receivers.join(" , ")}
              </span>
            </div>
            <span className="text-sm text-black font-medium">
              {body2.sendDateTime ? timeAgo(body2.sendDateTime) : ""}
            </span>
          </div>
          <p className="mb-2 text-sm font-bold ">obj : {body2.object}</p>
          <p className="truncate overflow-y-hidden text-ellipsis text-sm flex items-center justify-between">
            <span>content : {stripHtmlTags(body2.body)}</span>
          </p>
        </div>
      </div>
    );
  }

  return null;
}
